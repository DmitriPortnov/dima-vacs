const express = require('express');

const service = require('../services/vacations.service');
const validation = require('../validations/vacation.validation');
const auth = require('../validations/user.validation');

const router = express.Router();

router.get('/', service.getAllVacations);
router.get('/vacImg/:imgId', service.getVacationImage);
router.put('/', auth.loggedIn, validation.checkInputs, validation.checkFile, service.createNewVacation);
router.patch("/:vacId", auth.loggedIn, validation.checkInputs, service.updateVacation);
router.delete("/:vacId", auth.loggedIn, service.deleteVacation);

module.exports = router;