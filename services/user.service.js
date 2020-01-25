const User = require('../models/user.model');

const UserService = {
    sendUserData: (req, res) => {
        const { _id, username, firstname, lastname, permition } = req.user;
        res.send({ _id, username, firstname, lastname, permition });
    },
    signUp: async (req, res, next) => {
        try {
            const newUser = new User(req.body);
            await newUser.save();
            next();
        } catch (e) {
            throw Error('user service got something wrong');
        }
    },
    logout: (req, res) => {
        req.logout();
        res.sendStatus(200);
    },
    serialize: (user, done) => done(null, user),
    deSerialize: (user, done) => done(null, user)
}

module.exports = UserService;