const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event');


router.get('/list', eventController.getEventList);

router.post('/create', eventController.createEvent);

module.exports = router;
