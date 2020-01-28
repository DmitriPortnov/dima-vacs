const User = require('../models/user.model');
const bcrypt = require('bcryptjs')

userValidation = {
    loggedIn: (req, res, next) => {
        console.log(req.isAuthenticated());
        if (req.isAuthenticated()) {
            return next();
        } else {
            throw new Error("please login");
        }
    },
    login: (username, password, done) => {
        User.findOne({ username }, async (err, user) => {
            if (err) { 
                return done({message: "incorrect user / password"}, false);
            }
            if (!user) { return done({message: "incorrect user"}, false);
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return done({message: "incorrect password"}, false);
            }
            return done(null, user);
        });
    },
    signUp: async (req, res, next) => {
        const { username, firstname, lastname } = req.body;
        try {
            const user = await User.find({username});
            if (user.length > 0) {throw new Error("this user already exist!")};
            const userDet = await User.find({firstname, lastname});
            if (userDet.length > 0) {
                throw new Error("you already have a user!!!");
            }
            next();
        } catch (e) {
            res.status(400).send({ message: e.message });
        }
    },
    checkInputs(req, res, next) {
        const {username, password} = req.body;
        if (username.trim().length === 0) {
            throw new Error("please enter the username")
        }
        if (password.trim().length === 0) {
            throw new Error("please enter the password")
        }
        return next();
    }
}

module.exports = userValidation;