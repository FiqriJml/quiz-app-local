// Inisialisasi koneksi Socket.IO ke server
const socket = io();

// Elemen DOM
const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");

let quizzes = [];
let participantId = "user1"; // Bisa diganti sesuai user sebenarnya

// Ambil soal dari backend via API HTTP
fetch("/api/quiz")
  .then((res) => res.json())
  .then((data) => {
    quizzes = data;
    renderQuiz();

    // Kirim event startQuiz ke server untuk reset skor
    socket.emit("startQuiz", participantId);
  })
  .catch((err) => {
    console.error("Gagal ambil soal:", err);
    quizContainer.innerHTML = "<p>Gagal memuat soal.</p>";
  });

// Render soal dan opsi ke halaman
function renderQuiz() {
  quizContainer.innerHTML = "";
  quizzes.forEach((quiz) => {
    const div = document.createElement("div");
    div.classList.add("question-block");
    div.innerHTML = `
        <p><strong>${quiz.question}</strong></p>
        ${quiz.options
          .map(
            (option) => `
          <label>
            <input type="radio" name="q${quiz.id}" value="${option[0]}"> ${option}
          </label><br>
        `
          )
          .join("")}
      `;
    quizContainer.appendChild(div);
  });
  submitBtn.disabled = false;
}

// Saat tombol submit ditekan
submitBtn.addEventListener("click", () => {
  const answers = [];
  let allAnswered = true;
  quizzes.forEach((quiz) => {
    const selected = document.querySelector(
      `input[name="q${quiz.id}"]:checked`
    );
    if (!selected) {
      allAnswered = false;
    } else {
      answers.push({
        questionId: quiz.id,
        answer: selected.value,
      });
    }
  });
  if (!allAnswered) {
    alert("Silahkan jawab semua pertanyaan terlebih dahulu!");
    return;
  }

  submitBtn.disabled = true;
  resultContainer.textContent = "Mengirim jawaban...";

  // Kirim jawaban ke server via WebSocket
  answers.forEach(({ questionId, answer }) => {
    socket.emit("submitAnswer", { participantId, questionId, answer });
  });
});

// Terima Feedback jawaban dari server via WebSocket
socket.on("answerResult", (data) => {
  if (data.error) {
    alert(data.error);
    return;
  }
  resultContainer.textContent = `Jawaban Anda: ${
    data.isCorrect ? "benar" : "salah"
  }. Skor Anda: ${data.score}`;
});

socket.on("scoreUpdate", (data) => {
  if (data.participantId === participantId) {
    // Update UI skor jika peserta ini
    resultContainer.textContent = `Skor Anda: ${data.score}`;
  }
});
