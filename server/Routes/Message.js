import express from "express";
import Message from "../models/message.js";

const router = express.Router();


router.get("/users",async (req,res)=>{
   try {
    
    const userIds = await Message.distinct("userId"); 
    res.json(userIds); 
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
})


router.post("/user", async (req, res) => {
  try {
    const {userId}  = req.body
    const messages = await Message.find({userId}).sort({ date: 1 });
    res.json(messages);
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { userId, role, message } = req.body;
    const newMsg = new Message({
      userId,
      role,
      message,
      date: new Date()
    });

    await newMsg.save();

    res.status(201).json({ success: true, message: "Message stored", newMsg });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ error: "Failed to save message" });
  }
});

export default router;
