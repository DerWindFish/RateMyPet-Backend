const { Pet, UserRating } = require('../models')
const Sequelize = require('sequelize')


const GetRatings = async (req, res) => {
  try {
    const list = await UserRating.findAll({
      include: [
        {
          model: Pet,
          as: 'userrating' 
        }
      ]
    })
    res.send(list)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  GetRatings
}