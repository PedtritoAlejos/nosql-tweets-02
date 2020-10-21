const Tweet = require("../models/tweets");


exports.getTweets = (req,res) => {
    return res.json({ message:"success"});
}
exports.getFollowers = (req,res) => {
    return res.json({ message:"success"});
}
exports.createTweet = (req,res) => {
    return res.json({ message:"success"});
}
exports.deleteTweet = (req,res,next) => {
    return res.json({ message:"success"});
}

exports.tweetById = (req,res,next,id) => {
    Tweet.findById(id).exec((err, user) => {
        if (err || !tweet) {
            return res.status(400).json({
                error: "Tweet not found"
            });
        }
        req.tweet = tweet;
        next();
    });
}