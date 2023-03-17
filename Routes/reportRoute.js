const express = require('express');
const {getReportData, createReportData} = require("../Controller/reportController");

const router = express.Router();
const authenticate = require("../middleware/index");

router.get("/reportData/:id?", authenticate, getReportData);
router.post("/createReport", authenticate, createReportData);

module.exports = router;
