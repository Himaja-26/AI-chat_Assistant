const express = require("express");
const cors = require("cors");
require("dotenv").config();
const chatRoutes = require("./routes/chatRoutes");


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "AI Chat Assistant Backend is running!",
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "Frontend successfully connected to backend!",
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});