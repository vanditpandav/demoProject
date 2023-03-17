const Template = require("../Model/templateSchema");


module.exports.getTemplateData = async (req, res) => {
    try {
        const Data = req.params.id ? {
            _id: req.params.id
        } : {};

        const result = await Template.find(Data);
        return res.status(201).send(result);
    } catch (error) {
        return res.send(error);
    }

}

module.exports.createTemplateData = async (req, res) => {
    try {
        const templateData = new Template(req.body);
        const result = await templateData.save();

        return res.status(201).send(result);

    } catch (error) {
        return res.send(error);
    }


}
