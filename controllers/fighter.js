const Fighter = require('../models/Fighter')
const cloudinary = require("../middleware/cloudinary")

module.exports = {
    getCharacterSelect: async (req, res) => {
        try{
            const fighters = await Fighter.find()
            res.render('characterSelect.ejs', { fighters: fighters})
        }catch(err){
            console.log(err)
        }
    },
    getFighter: async (req, res) => {
        try{
            const fighter = await Fighter.findById(req.params.id)
            res.render('fighter.ejs', { fighter: fighter })
        }catch(err){
            console.log(err)
        }
    },
    getAddFighter: (req, res) => {
        res.render('newFighter.ejs')
    },
    addNewFighter: async (req, res) => {
        try {
            const result = await cloudinary.uploader.upload(req.file.path);
            console.log(result)
          await Fighter.create({
            name: req.body.name,
            antiairs: req.body.antiairs,
            pokes: req.body.pokes,
            bnbLight: req.body.bnbLight,
            bnb: req.body.bnb,
            crushCounterEZ: req.body.crushCounterEZ,
            dpPunish: req.body.dpPunish,
            tickThrowButtons: req.body.tickThrowButtons,
            image: result.secure_url,
            cloudinaryId: result.public_id,
          });
          console.log("Fighter has been added!");
          res.redirect("/fighters/getAddFighter");
        } catch (err) {
          console.log(err);
        }
    },
}