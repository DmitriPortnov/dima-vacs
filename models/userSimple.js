const mongoose = require('mongoose');

const userSimple = new mongoose.Schema({
    username: String,
    password: String,
    avatar: ''
});

module.exports = mongoose.model('Users', userSimple);