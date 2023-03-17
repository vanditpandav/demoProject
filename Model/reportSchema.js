const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    temp_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Template'
    },
    Name: String
}, {timestamps: true});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
