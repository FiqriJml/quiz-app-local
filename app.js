const express = require("express");
const http = require("http");
const quizRoutes = require("./backend/routes/quizRoutes");
const scoringRoutes = require("./backend/routes/scoringRoutes");
const setupSocket = require("./backend/utils/socket");

const app = express();
const server = http.createServer(app);
const io = setupSocket(server);

// Middleware
app.use(express.json());
app.use("/api/quiz", quizRoutes);
app.use("/api/scoring", scoringRoutes);
app.use(express.static("public"));

// Port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
