const express = require("express");
const {check} = require("express-validator");
const {signup, signin} = require("../Controller/auth");
const router = express.Router();


router.post("/signup", [
    check("email", "Email is required").isEmail(),
], signup);
router.post("/signin", [
    check("email", "Email is required").isEmail(),
], signin);


module.exports = router;
