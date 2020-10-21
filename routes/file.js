const express = require("express");
const router = express.Router();

const {
    avatarUpload,
    bannerUpload,
    getAvatar,
    getBanner
} = require("../controllers/file");


//routes
router.post("/file/avatar/upload",avatarUpload);
router.post("/file/banner/upload",bannerUpload);
router.get("/file/avatar",getAvatar);
router.get("/file/banner",getBanner);


module.exports = router;