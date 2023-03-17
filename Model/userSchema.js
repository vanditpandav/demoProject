const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    Password: String
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;
