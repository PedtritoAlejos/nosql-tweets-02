const User = require("../models/users");



exports.getRelation = (req,res) => {
    return res.json({ message:"success"});
}
exports.createRelationId = (req,res) => {
    return res.json({ message:"success"});
}
exports.deleteRelationId = (req,res) => {
    return res.json({ message:"success"});
}
exports.userById = (req,res,next,id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found"
            });
        }
        req.userRelationId = user;
        next();
    });
}

