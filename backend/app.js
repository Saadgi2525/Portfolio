const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const contactRoutes = require("../backend/src/routes/contactRoutes"); // Ensure this path is correct

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", contactRoutes);

module.exports = app;