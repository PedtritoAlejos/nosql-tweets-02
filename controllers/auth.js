const User = require("../models/users");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const { errorHandler } = require("../helpers/dbErrorHandler");


exports.signup = (req,res) => {

    const user = new User(req.body);
    user.save( (err,user) =>{
        if(err){
            return res.status(400).json({
                //error:errorHandler(err),
                errorDB: err
               
            });
        }
        res.json({
            user
        });
    });
};

exports.login = (req,res) => {
    const {email,password} = req.body;
    User.findOne({email}, (error,userDB ) => {
        if(error || !userDB){
            return res.status(400).json({
                error:"User with that email does not exist. Please signup"
            });
        }
        if(!userDB.authenticate(password)){
            return res.status(401).json({
                error:"Email and password dont match"
            });
        }
        const token = jwt.sign({_id:userDB.id},process.env.JWT_SECRET);
        res.cookie("t",token,{expire:new Date() + 9999});

        const { _id,name,email } = userDB;

        return res.json({  token,user:{ _id,name,email }});


    });

}