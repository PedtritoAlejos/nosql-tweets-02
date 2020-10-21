const express = require("express");
const router = express.Router();

const {
    getUserList,
    getUserProfile,
    setUser
    
} = require("../controllers/user");


//routes
router.get("/user/list",getUserList);
router.get("/user/profile",getUserProfile);
router.put("/user",setUser);


module.exports = router;