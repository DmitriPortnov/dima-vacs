const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const usersRoutes = require('./routes/users');
const vacationRoutes = require('./routes/vactions');
const likeRoutes = require('./routes/likes');
const errorHandler = require('./services/error.service');
const imageValidation = require('./validations/vacation.validation');

const app = express();
const PORT = process.env.PORT || 3500;
const collectionName = 'vacationDB'
const DB_URL = `mongodb+srv://Dmitri:mayDima24@cluster0-hsfdg.mongodb.net/${collectionName}?retryWrites=true&w=majority`;
const upload = multer(imageValidation.imageSet);

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    err => err ? console.error('mongoDB: ', err) : init()
);

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'Vacation-Project',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 15
    },
    store: new mongoStore({mongooseConnection: mongoose.connection})
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', usersRoutes, errorHandler);
app.use('/vacation', upload.single('image'), vacationRoutes, errorHandler);
app.use('/likes', likeRoutes);

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const init = () => {
    app.listen(PORT, () => console.log("server is up" + PORT));
}
