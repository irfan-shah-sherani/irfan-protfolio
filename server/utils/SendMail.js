import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mrirfankhansherani@gmail.com", 
    pass: "xlae dquf rtxw puon", 
  },
});

async function sendMail({ subject, text, html }) {
  const info = await transporter.sendMail({
    from: '"Portfolio Contact" <mrirfankhansherani@gmail.com>', 
    to : "mrirfankhansherani@gmail.com",
    subject,
    text,
    html,
  });

  console.log("Message sent:", info.messageId);
  return info;
}

export default sendMail;
