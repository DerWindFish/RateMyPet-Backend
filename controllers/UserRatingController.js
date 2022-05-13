const { UserRating } = require('../models')
const Sequelize = require('sequelize')

const GetRatings = async (req, res) => {
  try {
    const userRatings = await UserRating.findAll()
    res.send(userRatings)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRatings
}