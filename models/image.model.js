const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    image: Buffer
});

module.exports = mongoose.model('images', imageSchema);