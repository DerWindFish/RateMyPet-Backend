const { Review } = require('../models/reviews')

const GetReviews = async (req, res) => {
    try {
      const review = await Review.findAll()
      res.send(review)
    } catch (error) {
      throw error
    }
  }
  
  const AddReviews = async (req, res) => {
    try {
      const { name, review } = req.body
      const addReview = await Review.create({ name, review })
      res.send(addReview)
  
    } catch (error) {
      throw error
    }
  }

  const DeleteReview = async (req, res) => {
      try {
          let reviewId = parseInt(req.params.review_id)
          await Review.destroy({where: {id: reviewId}})
          res.send('Review Deleted ')
      } catch (error) {
          throw error
      }
  }

  const UpdateReview = async (req, res) => {
      try {
          let updatedReview = await Review.update(req.body.id)
          res.send(updatedReview)
      } catch (error) {
          throw error
      }
  }
  
  module.exports = {
      GetReviews,
      AddReviews,
      DeleteReview,
      UpdateReview
  }