const Router = require('express').Router()
const controller = require('../controllers/PetController')

Router.get('/', controller.GetPets)


module.exports = Router