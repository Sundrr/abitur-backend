const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Student = mongoose.model('Student', new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    school: {
        type: String,
        required: true,
    },
    eventId: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: false,
    },
    createdAt: {
        type: Date,
        required: true,
    },
}));

module.exports = Student;
