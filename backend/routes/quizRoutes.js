// backend/routes/quizRoutes.js

const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");

router.get("/", quizController.getAllQuiz);
router.post("/submit", quizController.submitAnswer);

module.exports = router;
