const House = require("../Model/houseSchema");
const Template = require("../Model/templateSchema");
const VisitHouse = require("../Model/visitSchema");


module.exports.getVisitHouseata = async (req, res) => {
    try {
        const Data = req.params.id ? {
            _id: req.params.id
        } : {};

        const result = await VisitHouse.find(Data);
        const documentsArray = await Promise.all(result.map(async (i) => {
            const {
                _id,
                house_card,
                report_template,
                ...rest
            } = i.toObject();
            const house_data = House.findOne({id: house_card});
            const temp_data = Template.findOne({_id: report_template});
            const [house, template] = await Promise.all([house_data, temp_data])
            return {
                ...rest,
                id: _id,
                houseData: house,
                templateData: template
            }
        }));
        return res.status(201).send(documentsArray);
    } catch (error) {
        return res.send(error);
    }

}

module.exports.createVisitHouseData = async (req, res) => {
    try {
        const visitHouseData = new VisitHouse(req.body);
        const result = await visitHouseData.save();

        return res.status(201).send(result);
    } catch (error) {
        return res.send(error);
    }


}
