const socketIo = require("socket.io");
const questions = require("../models/questions");

let partcipantScores = {};

module.exports = (server) => {
  const io = socketIo(server);
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("submitAnswer", (data) => {
      const { participantId, questionId, answer } = data;
      const question = questions.find((q) => q.id === questionId);
      if (!questionId) {
        socket.emit("answerResult", { error: "Question not found" });
        return;
      }
      const isCorrect = question.answer === answer;
      if (!participantScores[participantId]) {
        partcipantScores[participantId] = 0;
      }
      if (isCorrect) {
        partcipantScores[participantId]++;
      }
      socket.emit("answerResult", {
        isCorrect,
        score: partcipantScores[participantId],
      });
      io.emit("scoreUpdate", {
        participantId,
        score: partcipantScores[participantId],
      });
      console.log("Participant scores:", partcipantScores);
    });
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};
