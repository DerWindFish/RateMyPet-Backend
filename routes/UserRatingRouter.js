const Router = require('express').Router()
const controller = require('../controllers/UserRatingController')

Router.get('/', controller.GetUserRating)
Router.put('/update', controller.CreateRating)
// Router.delete('/:user', controller.DeleteSingleRating)
Router.delete('/:user/:anime', controller.DeleteSingleRating)


module.exports = Router
