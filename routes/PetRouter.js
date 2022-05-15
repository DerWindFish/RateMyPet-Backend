const Router = require('express').Router()
const controller = require('../controllers/PetController')

Router.get('/', controller.GetPets),
Router.post('/', controller.AddPets)


module.exports = Router