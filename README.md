# Sistem Quiz Online Lokal

Proyek ini bertujuan untuk membuat aplikasi quiz multiple choice yang berjalan offline di laptop lokal, dapat diakses oleh 30-36 peserta secara bersamaan melalui jaringan Wi-Fi lokal, dengan scoring otomatis dan feedback skor real-time.

## Fitur Sementara

1. Membuat quiz multiplechoice.
2. Scoring otomatis.

## Fitur yang belum diimplementasikan

1. Membuat quiz Fill in the blank.
2. Membuat quiz multiplechoice bergambar.
3. Membuat sistem manajemen quiz.
4. Membuat sistem manajemen user.

## Struktur Folder

quiz-online-lokal
/backend
/controllers

- quizController.js
- scoringController.js
  /routes
- quizRoutes.js
- scoringRoutes.js
  /models
- questions.js
  /utils
- socket.js
  app.js
  package.json
  /frontend
  /css
- styles.css
  /js
- quiz.js
  index.html
  .gitignore
  README.md

## Milestone

1. Setup Environment & Project
2. Backend - API Soal & Jawaban
3. Backend - Logika Scoring
4. Backend - Integrasi Real-Time
5. Frontend - Halaman Quiz
6. Frontend - Pengiriman Jawaban & Feedback Skor Real-time
7. Testing Multi-device Access
