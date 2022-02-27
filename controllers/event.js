const Event = require('../models/event');

exports.getEventList = (req, res, next) => {
    Event
    .find()
    .populate('responsibleId')
    .then(events => {
        res.status(200).json(events);
    })
}

exports.createEvent = (req, res, next) => {
    const title = req.body.title;
    const school = req.body.school;
    const datetime = req.body.datetime || new Date;
    const responsibleId = req.body.responsibleId;
    const createdAt = new Date;
    const event = new Event({ title, school, datetime, responsibleId, createdAt });
    event
    .save()
    .then((result) => {
        return res.status(201).json({ message: 'Event created' })
    })
    .catch(err => {
        return res.status(err.status || 500).json({ message: err.message, error: err });
    });
}

