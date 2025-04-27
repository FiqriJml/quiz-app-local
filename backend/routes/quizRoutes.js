const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");

// Route untuk mendapatkan soal
router.get("/", quizController.getQuestions);

// Route untuk menerima jawaban
router.post("/submit", quizController.submitAnswers);

module.exports = router;
