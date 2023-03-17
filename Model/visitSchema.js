const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
    date_visit: {
        type: String,
        default: null
    },
    house_card: {
        type: Number,
        ref: 'House'
    },
    report_template: {
        type: mongoose.Types.ObjectId,
        ref: 'Template'
    },
    report_status: String
}, {timestamps: true});

const VisitHouse = mongoose.model("VisitHouse", visitSchema);

module.exports = VisitHouse;
