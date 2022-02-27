const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Responsible = mongoose.model('Responsible', new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
}));

module.exports = Responsible;
