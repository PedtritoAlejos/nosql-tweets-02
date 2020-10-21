
const User = require("../models/users");


exports.getUserList = (req,res) => {

    User.find().exec( (err,usersDB) => {
        if(err || ! usersDB){
            return res.status(400).json({
                error : "User not found"
            });
        }
        return res.status(200).json({
            users:usersDB
        });
    });
    
}
exports.getUserProfile = (req,res) => {
    return res.json({ message:"success"});
}
exports.setUser = (req,res) => {
    return res.json({ message:"success"});
}

