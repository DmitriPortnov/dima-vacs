const sharp = require('sharp');
const Vacation = require('../models/vacation.model');
const Image = require('../models/image.model');
const Likes = require('../models/likes.model');

const error = (e) => {
    console.error(e)
    throw Error('bad connection, please try again later')
}

const vacationService = {
    getAllVacations: async (req, res) => {
        try {
            const vacs = await Vacation.find();
            res.send(vacs);
        } catch (err) {
            error();
        }
    },
    getVacationImage: async (req, res) => {
        try {
            const vacationImage = await Image.findById(req.params.imgId);
            res.set('Content-Type', 'image/jpg');
            res.send(vacationImage.image);
        } catch (e) {
            error(e);
        }
    },
    createNewVacation: async (req, res) => {
        const { title, description } = req.body;
        try {
            const resizedImage = await sharp(req.file.buffer).resize({width: 800, height: 600}).toBuffer();
            const newImage = new Image({
                image: resizedImage
            });
            const savedImage = await newImage.save();
            const newVac = new Vacation({
                title,
                description,
                image: savedImage._id
            });
            const savedVac = await newVac.save();
            res.send(savedVac);
        } catch (e) {
            error(e);
        }
    },
    updateVacation: async (req, res) => {
        try {
            const vac = await Vacation.findById(req.params.vacId);
            if (req.file) {
                await Image.findByIdAndUpdate(
                    vac.image,
                    {image: req.file.buffer},
                    {useFindAndModify: false}
                );
            }
            const updatedVac = await vac.update(req.body);
            res.send(updatedVac);
        } catch (e) {
            error(e);
        }
    },
    deleteVacation: async (req, res) => {
        try {
            const vac = await  Vacation.findById(req.params.vacId);
            await Image.findByIdAndRemove(vac.image, {useFindAndModify: false});
            await Likes.find({vacId: req.params.vacId});
            await Likes.remove();
            await vac.remove();
            res.sendStatus(200);
        } catch (err) {
            error(e);
        }
    }
}

module.exports = vacationService;