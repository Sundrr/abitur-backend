const Student = require('../models/student');
const Event = require('../models/event');

exports.getStudentList = (req, res, next) => {
    Student.find().then(users => {
        res.status(200).json(users);
    })
}

exports.createStudent = (req, res, next) => {
    const lastEvent = Event.findOne().sort({ createdAt: -1}).limit(1);
    console.log('lst event', lastEvent);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;
    const school = req.body.school;
    const eventId = lastEvent._id;
    const createdAt = new Date;
    const user = new Student({ firstName, lastName, phone, school, eventId, createdAt });
    user
    .save()
    .then((result) => {
        return res.status(201).json({ message: 'Student created' })
    })
    .catch(err => {
        return res.status(err.status || 500).json({ message: err.message, error: err });
    });
}

