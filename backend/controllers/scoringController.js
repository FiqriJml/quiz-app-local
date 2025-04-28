// backend/controllers/scoringController.js

const questions = require("../models/questions");

exports.calculateScore = (req, res) => {
  const { participantId, answers } = req.body; // answers: [{ questionId, answer }, ...]
  let score = 0;

  answers.forEach(({ questionId, answer }) => {
    const question = questions.find((q) => q.id === questionId);
    if (question && question.answer === answer) {
      score++;
    }
  });

  res.json({ participantId, score });
};
