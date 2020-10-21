const express = require("express");
const router = express.Router();

const {
    signup,
    login
} = require("../controllers/auth");
const {userSignupValidator , loginValidator} = require("../validator");

//routes
router.post("/signup",userSignupValidator,signup);
router.post("/login",loginValidator,login);


module.exports = router;