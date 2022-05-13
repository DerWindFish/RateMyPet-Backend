'use strict';

const{Pet, UserRating} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const petlist = await Pet.findAll({ raw: true })
    const userRatings = await UserRating.findAll({ raw: true })
    
    const ratings = petlist.map((a) => ({
      petId: petlist[Math.floor(Math.random() * petlist.length)].id,
      userRatingId: userRatings[Math.floor(Math.random() * userRatings.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('ratings', ratings)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ratings')
  }
}
