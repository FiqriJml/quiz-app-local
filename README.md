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

QUIZ-ONLINE-LOKAL/
├── backend/
│ ├── controllers/
│ │ ├── quizController.js
│ │ └── scoringController.js
│ ├── models/
│ │ └── questions.js
│ ├── routes/
│ │ ├── quizRoutes.js
│ │ └── scoringRoutes.js
│ └── utils/
│ └── socket.js
├── frontend/
├── node_modules/
├── public/
├── app.js
├── package.json
├── package-lock.json
└── README.md

## Milestone

1. Setup Environment & Project
2. Backend - API Soal & Jawaban
3. Backend - Logika Scoring
4. Backend - Integrasi Real-Time
5. Frontend - Halaman Quiz
6. Frontend - Pengiriman Jawaban & Feedback Skor Real-time
7. Testing Multi-device Access
