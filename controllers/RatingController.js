const { Pet, UserRating, Rating } = require('../models')
const Sequelize = require('sequelize')

const GetRatingsList = async (req, res) => {
    try {
        const list = await Pet.findAll({
            include: [
                {
                    model: UserRating,
                    as: 'ratings'
                }
                
            ]
        })
        res.send(list)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    GetRatingsList
}