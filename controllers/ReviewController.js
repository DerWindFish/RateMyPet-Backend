const { Reviews } = require('../models')

const GetReviews = async (req, res) => {
    try {
      const review = await Reviews.findAll()
      res.send(review)
    } catch (error) {
      throw error
    }
  }

  const GetReviewDetails = async (req, res) => {
      try {
          const getReview = await Reviews.findByPk(req.params.id)
          res.send(getReview)
      } catch (error) {
          throw error
      }
  }
  
  const AddReviews = async (req, res) => {
    try {
      const { name, review } = req.body
      const addReview = await Reviews.create({ name, review })
      res.send(addReview)
  
    } catch (error) {
      throw error
    }
  }

  const DeleteReview = async (req, res) => {
      try {
          let reviewId = parseInt(req.params.id)
          await Reviews.destroy({where: {id: reviewId}})
          res.send('Review Deleted ')
      } catch (error) {
          throw error
      }
  }

  const UpdateReview = async (req, res) => {
      try {
          let reviewId = parseInt(req.params.id)
          let updatedReview = await Reviews.update(req.body, {
              where: { id: reviewId },
              returning: true
          })
          res.send(updatedReview)
      } catch (error) {
          throw error
      }
  }
  
  module.exports = {
      GetReviews,
      GetReviewDetails,
      AddReviews,
      DeleteReview,
      UpdateReview
  }