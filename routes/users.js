const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const validation = require('../validations/user.validation');
const service = require('../services/user.service');

const router = express.Router();

passport.use('login', new LocalStrategy(validation.login));
passport.serializeUser(service.serialize);
passport.deserializeUser(service.deSerialize);

router.post('/loggedIn', validation.loggedIn, service.sendUserData);
router.post('/login', validation.checkInputs, passport.authenticate('login'), service.sendUserData);
router.put('/sign-up', validation.signUp , service.signUp, passport.authenticate('login'), service.sendUserData);
router.get('/logout', service.logout);

module.exports = router;