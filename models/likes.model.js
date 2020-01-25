const mongoose = require('mongoose');

const LikeSchema = mongoose.Schema({
    userId: mongoose.Types.ObjectId | 0,
    vacId: mongoose.Types.ObjectId,
});

module.exports = mongoose.model('likes', LikeSchema);