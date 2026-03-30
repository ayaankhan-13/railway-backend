const nodemailer = require("nodemailer");

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({

  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports

  auth: {
    user: process.env.SMTP_PASS,
    pass: process.env.SMTP_KEY,
  },
});