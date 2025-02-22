import "dotenv/config"; // Load environment variables
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // Change based on your email provider
  auth: {
    user: process.env.EMAIL_USER, // Admin email (sender)
    pass: process.env.EMAIL_PASS, // Email password or app password
  },
});

// API Route to Handle Contact Form Submission
app.post("/api/contact", async (req, res) => {
  const { firstName, email, subject, message } = req.body;

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form Submission - ${subject}`,
    html: `
      <div style="max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); overflow: hidden;">
        
        <div style="background-color: #206a5d; color: #ffffff; padding: 20px; text-align: center; font-size: 22px; font-weight: bold;">
          New Contact Form Submission
        </div>
        
        <div style="padding: 20px;">
          <p style="font-size: 16px; color: #333333; line-height: 1.6;"><strong>Hello Admin,</strong></p>
          <p style="font-size: 16px; color: #333333; line-height: 1.6;">You have received a new contact request. Here are the details:</p>
  
          <div style="background-color: #f9e79f; padding: 10px; margin: 10px 0; border-radius: 5px;">
            <p style="margin: 0; font-size: 16px;"><strong>Name:</strong> ${firstName}</p>
          </div>
          <div style="background-color: #f9e79f; padding: 10px; margin: 10px 0; border-radius: 5px;">
            <p style="margin: 0; font-size: 16px;"><strong>Email:</strong> ${email}</p>
          </div>
          <div style="background-color: #f9e79f; padding: 10px; margin: 10px 0; border-radius: 5px;">
            <p style="margin: 0; font-size: 16px;"><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #f9e79f; padding: 10px; margin: 10px 0; border-radius: 5px;">
            <p style="margin: 0; font-size: 16px;"><strong>Message:</strong></p>
            <p style="margin: 5px 0; font-size: 16px;">${message}</p>
          </div>
  
          <p style="color: #206a5d; font-weight: bold; font-size: 16px;">Please respond as soon as possible.</p>
        </div>
  
        <div style="background-color: #206a5d; color: #ffffff; text-align: center; padding: 15px; font-size: 14px;">
          <p style="margin: 5px 0;">&copy; 2025 Your Company. All Rights Reserved.</p>
          <p style="margin: 5px 0;"><a href="https://yourwebsite.com" style="color: #f9e79f; text-decoration: none;">Visit Our Website</a></p>
        </div>
  
      </div>
    `
  };
  

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
