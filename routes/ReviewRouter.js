const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

Router.get('/', controller.GetReviews),
Router.post('/', controller.AddReviews)
Router.get('/:id', controller.GetReviewDetails)
Router.delete('/:id', controller.DeleteReview)
Router.put('/:id', controller.UpdateReview)


module.exports = Router