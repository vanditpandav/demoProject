const Report = require("../Model/reportSchema");


module.exports.getReportData = async (req, res) => {

    try {

        const Data = req.params.id ? {
            _id: req.params.id
        } : {};

        const result = await Report.find(Data);
        return res.status(201).send(result);
    } catch (error) {
        return res.send(error);
    }
}

module.exports.createReportData = async (req, res) => {
    try {

        const reportData = new Report(req.body);
        const result = await reportData.save();

        return res.status(201).send(result);

    } catch (error) {
        return res.send(error);
    }


}
