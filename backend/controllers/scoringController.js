const questions = require("../models/questions");

exports.calculateScore = (req, res) => {
  const { answers } = req.body; // Get the answers from the request body
  let score = 0; // Initialize score

  // Loop through each question and check if the answer is correct
  questions.forEach((question) => {
    if (answers[question.id] === question.answer) {
      score += 1; // Increment score for each correct answer
    }
  });

  res.json({ score }); // Send the score back to the client
};
