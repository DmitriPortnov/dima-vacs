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
    },
    getChartLikes: async (req, res) => {
        const charts = [{title: '', count: 0}];
        const chartLikes = await Like.find({}).populate('vacId');
        chartLikes.map((like) => {
            let chart = charts.find((chart) => chart.title === like.vacId.title);
            if (!!chart) {
                chart.count++
            } else {
                charts.push({
                    title: like.vacId.title,
                    count: 1
                });
            }
        })
        charts.shift();
        res.send(charts);
    }
}

module.exports = LikeService;