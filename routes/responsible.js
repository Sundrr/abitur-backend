const express = require('express');
const router = express.Router();
const responsibleController = require('../controllers/responsible');


router.get('/list', responsibleController.getResponsibleList);

router.post('/create', responsibleController.createResponsible);

module.exports = router;
