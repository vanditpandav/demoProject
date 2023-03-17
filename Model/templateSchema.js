const mongoose = require("mongoose");

const temaplateSchema = new mongoose.Schema({
    Name: String
}, {timestamps: true});

const Template = mongoose.model("Template", temaplateSchema);

module.exports = Template;
