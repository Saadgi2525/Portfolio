const express = require("express");
const { sendContactEmail } = require("../controllers/contactController"); // Ensure this path is correct

const router = express.Router();

// POST route to handle contact form submissions
router.post("/contact", (req, res) => sendContactEmail(req, res));

module.exports = router;