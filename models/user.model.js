const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    permition: {
        type: Number,
        default: 0
    }
});

User.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 8);
    next();
});

module.exports = mongoose.model('users', User);