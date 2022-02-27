const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Event = mongoose.model('Event', new Schema({
    title: {
        type: String,
        required: true,
    },
    school: {
        type: String,
        required: false,
    },
    datetime: {
        type: Date,
        required: true,
    },
    responsibleId: {
        type: Schema.Types.ObjectId,
        ref: 'Responsible',
        required: false,
    },
    createdAt: {
        type: Date,
        required: true,
    },
}));

module.exports = Event;
