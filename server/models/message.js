import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  userId: { type: String, required: false, index: true },
  role: { type: String, required: true, index: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Message", MessageSchema);
