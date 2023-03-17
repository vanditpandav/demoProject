const express = require('express');
const {createTemplateData, getTemplateData} = require("../Controller/templateController");

const router = express.Router();
const authenticate = require("../middleware/index");

router.get("/templateData/:id?", authenticate, getTemplateData);
router.post("/createTemplate", authenticate, createTemplateData);

module.exports = router;
