const nodemailer = require("nodemailer");

const sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Environment variable
        pass: process.env.EMAIL_PASS, // Environment variable
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Replace with your email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Message sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send message. Please try again.");
  }
};

// Export as an object to enable destructuring
module.exports = { sendContactEmail };