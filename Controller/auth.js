const {validationResult} = require("express-validator");
const User = require("../Model/userSchema");
const jwt = require("jsonwebtoken");

module.exports.signin = async (req, res) => {
    try {
        const Obj = {
            Email: req.body.Email,
            Password: req.body.Password
        }
        const result = await User.findOne(Obj);
        if (result) {
            const token = jwt.sign({
                _id: result._id
            }, "QWERASDFZXCVTYUIGHJKBNVNNJDGFNMRGHFNSDYHFHDHHFUCFXJFHNDBSJFHrrytdrryhfty5y");
            return res.status(200).json({token, Result: result});
        } else {
            res.send({message: "plzz sign up first"});
        }
    } catch (error) {
        res.send(error);
    }
};

module.exports.signup = async (req, res) => {
    try {

        const user = new User(req.body);
        const result = await user.save();

        return res.status(201).send(result);
    } catch (error) {
        res.send(error);
    }
};
