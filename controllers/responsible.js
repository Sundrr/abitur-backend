const Responsible = require('../models/responsible');

exports.getResponsibleList = (req, res, next) => {
    Responsible.find().then(result => {
        res.status(200).json(result);
    })
}

exports.createResponsible = (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const position = req.body.position;
    const createdAt = new Date;
    const responsible = new Responsible({ firstName, lastName, position, createdAt });
    responsible
    .save()
    .then((result) => {
        return res.status(201).json({ message: 'Responsible created' })
    })
    .catch(err => {
        return res.status(err.status || 500).json({ message: err.message, error: err });
    });
}
