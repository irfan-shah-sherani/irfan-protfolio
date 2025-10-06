import express from "express";
import sendMail from "../utils/SendMail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("contact is calledcontact is called")
  try {
    const { name,Second, email, phone, message } = req.body;

    const subject = "New Contact Message";
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    await sendMail({ subject, text, html });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
    console.log(name)
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

export default router;
