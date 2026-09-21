const express = require("express");
const { generateResponse } = require("../services/aiService");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message, tone } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const response = await generateResponse(message, tone);

    res.json({
      response,
    });
  } catch (error) {
    console.error("AI Error:", error);

    res.status(500).json({
      error: "Failed to generate AI response",
    });
  }
});

module.exports = router;