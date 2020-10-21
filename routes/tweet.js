const express = require("express");
const router = express.Router();

const {
    getTweets,
    getFollowers,
    createTweet,
    deleteTweet,
    tweetById
} = require("../controllers/tweet");

const {createTweetValidator } = require("../validator/index");
//routes
router.get("/tweets",getTweets);
router.get("/tweets/followers",getFollowers);
router.post("/tweet/create",createTweetValidator,createTweet);
router.delete("/tweet/:tweetId",deleteTweet);

//params
router.param("tweetId",tweetById);


module.exports = router;