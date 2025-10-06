import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import contact from "./Routes/Contact.js";
import messageRoutes from "./Routes/Message.js";
import Message from "./models/message.js"; // Import your Message model

const app = express();

// ----------------------
// MongoDB Connection
// ----------------------
mongoose.connect('mongodb://127.0.0.1:27017/Protfolio')
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.error("MongoDB connection error:", err));

// ----------------------
// Middleware
// ----------------------
app.use(express.json());
app.use(cors());

// ----------------------
// Routes
// ----------------------
app.use("/messages", messageRoutes);
app.use("/contact", contact);
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

// ----------------------
// HTTP & Socket.IO Server
// ----------------------
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:5174"], // admin + users
    methods: ["GET", "POST"]
  }
});


// ----------------------
// Socket.IO Handlers
// ----------------------
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // join a room
  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(`${socket.id} joined room ${roomId}`);
  });

  socket.on("sendMessage", async (msg) => {
    try {
      await Message.create(msg);
      // send only to room
      socket.to(msg.userId).emit("receiveMessage", msg); 
    } catch (err) {
      console.error(err);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});
// ----------------------
// Start Server
// ----------------------
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
