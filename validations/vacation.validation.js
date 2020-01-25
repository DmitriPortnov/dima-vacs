
const vacationValidation = {
    imageSet: {
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|pnd|jpeg)$/g)) {
                cb({message: 'wrong type of file, please choose only images'}, false);
            }
            cb(null, true);
        }
    },
    checkInputs: (req, res, next) => {
        console.log('body**************************', req.body)
        const { title, description } = req.body;
        if (title === '') {
            throw new Error("please write a title");
        }
        if (description === '') {
            throw new Error("please write a description");
        }
        next();
    },
    checkFile: (req, res, next) => {
        console.log('file***********************************', req.file)
        if (!req.file) {
            throw new Error('please choose a picture');
        }
        next();
    },
    checkImage(req, res, next) {
        const { vacImg } = req.params;
        if (vacImg === '') {
            return res.sendStatus(200);
        }
        return next();
    }
}

module.exports = vacationValidation;