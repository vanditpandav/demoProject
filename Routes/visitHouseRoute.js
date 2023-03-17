const express = require('express');
const {getVisitHouseata, createVisitHouseData} = require("../Controller/visitHouseController");

const router = express.Router();
const authenticate = require("../middleware/index");

router.get("/visitHouseData/:id?", authenticate, getVisitHouseata);
router.post("/createVisitHouse", authenticate, createVisitHouseData);

module.exports = router;
