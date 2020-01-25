const Like = require('../models/likes.model');

const LikeService = {
    getUserLikes: async (req, res) => {
        const { userId } = req.params;
        const likes = await Like.find({userId});
        res.send(likes);
    },
    userLike: async (req, res) => {
        const { userId, vacId } = req.params;
        const newLike = new Like({
            userId,
            vacId
        });
        await newLike.save();
        res.send(newLike);
    },
    userUnlike: async (req, res) => {
        const { userId, vacId } = req.params;
        const like = await Like.findOneAndDelete({userId, vacId});
        res.send(like);
    }
}

module.exports = LikeService;