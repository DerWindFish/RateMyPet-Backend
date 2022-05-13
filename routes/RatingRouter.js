const Router = require('express').Router()
const controller = require('../controllers/RatingController')

Router.get('/', controller.GetRatingsList)

module.exports = Router