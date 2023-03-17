const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
    id: Number,
    Address1: String,
    Address2: String,
    Customer: String,
    Phone: Number,
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }

}, {timestamps: true});

const House = mongoose.model("House", houseSchema);

module.exports = House;
