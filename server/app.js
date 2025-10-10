import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import contact from "./Routes/Contact.js";
import messageRoutes from "./Routes/Message.js";
import Message from "./models/message.js"; 

const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/Protfolio')
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.error("MongoDB connection error:", err));


app.use(express.json());
app.use(cors());


app.use("/messages", messageRoutes);
app.use("/contact", contact);
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});


const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST"]
  }
});



io.on("connection", (socket) => {
  console.log("User connected:", socket.id);


  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(`${socket.id} joined room ${roomId}`);
  });

  socket.on("sendMessage", async (msg) => {
    try {
      await Message.create(msg);

      socket.to(msg.userId).emit("receiveMessage", msg); 
    } catch (err) {
      console.error(err);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});


server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
