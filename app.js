const express = require("express");
const app = express();
const quizRoutes = require("./backend/routes/quizRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/api/quiz", quizRoutes);

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
