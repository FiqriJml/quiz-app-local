const socketIo = require("socket.io");
const questions = require("../models/questions");

let participantScores = {};

module.exports = (server) => {
  const io = socketIo(server);
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
    socket.on("startQuiz", (participantId) => {
      participantScores[participantId] = 0;
      socket.emit("scoreUpdate", { participantId, score: 0 });
    });
    socket.on("submitAnswer", (data) => {
      const { participantId, questionId, answer } = data;
      const question = questions.find((q) => q.id === questionId);
      if (!questionId) {
        socket.emit("answerResult", { error: "Question not found" });
        return;
      }
      const isCorrect = question.answer === answer;
      if (!participantScores[participantId]) {
        participantScores[participantId] = 0;
      }
      if (isCorrect) {
        participantScores[participantId]++;
      }
      socket.emit("answerResult", {
        isCorrect,
        score: participantScores[participantId],
      });
      io.emit("scoreUpdate", {
        participantId,
        score: participantScores[participantId],
      });
      console.log("Participant scores:", participantScores);
    });
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};
