const House = require("../Model/houseSchema");


module.exports.getHouseData = async (req, res) => {
    try {

        const Data = req.params.id ? {
            _id: req.params.id
        } : {};

        const result = await House.find(Data);
        return res.status(201).send(result);
    } catch (error) {
        return res.send(error);
    }
}

module.exports.createHouseData = async (req, res) => {
    try {
        const houseData = new House(req.body);
        const result = await houseData.save();

        return res.status(201).send(result);

    } catch (error) {
        return res.send(error);
    }


}
