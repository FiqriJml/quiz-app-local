// backend/controllers/quizController.js

const questions = require("../models/questions");

// Kirim soal tanpa jawaban ke client
exports.getAllQuiz = (req, res) => {
  const questionsWithoutAnswer = questions.map(({ id, question, options }) => ({
    id,
    question,
    options,
  }));
  res.json(questionsWithoutAnswer);
};

// Terima jawaban peserta dan simpan sementara
let participantAnswers = [];

exports.submitAnswer = (req, res) => {
  const { participantId, answers } = req.body; // answers: [{ questionId, answer }, ...]

  const existingIndex = participantAnswers.findIndex(
    (p) => p.participantId === participantId
  );

  if (existingIndex >= 0) {
    participantAnswers[existingIndex].answers = answers;
  } else {
    participantAnswers.push({ participantId, answers });
  }

  res.json({ message: "Jawaban diterima" });
};
