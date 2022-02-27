const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student');


router.get('/list', studentController.getStudentList);

router.post('/create', studentController.createStudent);

module.exports = router;
