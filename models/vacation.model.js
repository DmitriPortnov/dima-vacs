const mongoose = require('mongoose');

const vacationSchema = mongoose.Schema({
    title: ({
        type: String,
        required: true
    }),
    description: ({
        type: String,
        required: true
    }),
    image: {
        type: mongoose.Types.ObjectId
    }
});

module.exports = mongoose.model('vacations', vacationSchema);