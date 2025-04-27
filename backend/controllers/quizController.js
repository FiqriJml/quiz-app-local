const questions = [
  {
    id: 1,
    question: "Apa ibukota Indonesia?",
    options: ["A. Jakarta", "B. Bandung", "C. Surabaya", "D. Medan"],
    answer: "A",
  },
  {
    id: 2,
    question: "Siapa penulis buku Harry Potter?",
    options: [
      "A. J.K. Rowling",
      "B. George Orwell",
      "C. J.R.R. Tolkien",
      "D. Stephen King",
    ],
    answer: "A",
  },
];

// Handler untuk mendapatkan soal
exports.getQuestions = (req, res) => {
  res.json(questions);
};

// Handler untuk menerima jawaban
exports.submitAnswers = (req, res) => {
  const submittedAnswers = req.body;
  let score = 0;

  questions.forEach((question) => {
    if (submittedAnswers[question.id] === question.answer) {
      score++;
    }
  });

  res.json({ score });
};
