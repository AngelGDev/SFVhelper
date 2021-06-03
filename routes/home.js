const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const fighterController = require('../controllers/fighter')

router.get('/', homeController.getIndex)

router.get('/characterSelect', fighterController.getCharacterSelect)

module.exports = router