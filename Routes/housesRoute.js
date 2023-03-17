const express = require('express');
const {createHouseData, getHouseData} = require("../Controller/housesController");

const router = express.Router();
const authenticate = require("../middleware/index");

router.get("/houseData/:id?", authenticate, getHouseData);
router.post("/createHouse", authenticate, createHouseData);

module.exports = router;
