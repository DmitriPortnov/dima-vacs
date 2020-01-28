const mongoose = require('mongoose');

const LikeSchema = mongoose.Schema({
    userId: mongoose.Types.ObjectId | 0,
    vacId: {type: mongoose.Types.ObjectId, ref: "vacations"}
});

module.exports = mongoose.model('likes', LikeSchema);