// backend/routes/scoringRoutes.js

const express = require("express");
const router = express.Router();
const scoringController = require("../controllers/scoringController");

router.post("/calculate", scoringController.calculateScore);

module.exports = router;
