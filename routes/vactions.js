const express = require('express');

const service = require('../services/vacations.service');
const validation = require('../validations/vacation.validation');

const router = express.Router();

router.get('/', service.getAllVacations);
router.get('/vacImg/:imgId', service.getVacationImage);
router.put('/', validation.checkInputs, validation.checkFile, service.createNewVacation);
router.patch("/:vacId", validation.checkInputs, service.updateVacation);
router.delete("/:vacId", service.deleteVacation);

module.exports = router;