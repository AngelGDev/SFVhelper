const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: "public/uploads/" });
const { storage } = require("../middleware/multer")
const fighter = require('../controllers/fighter')
const fighterController = require('../controllers/fighter')

router.get("/:id", fighterController.getFighter);

router.get('/getAddFighter', fighterController.getAddFighter)
router.post('/addNewFighter', upload.single('file'), fighterController.addNewFighter)

module.exports = router