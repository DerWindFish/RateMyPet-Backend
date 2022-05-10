'use strict';
const{User, Pet} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const users = await User.findAll({ raw:true })
    
    const pets = await Pet.findAll({ raw: true })
    
    const userratings = pets.map((a) => ({
      userId: users[Math.floor(Math.random() * users.length)].id,
      petId: pets[Math.floor(Math.random() * pets.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('userratings', userratings)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userratings')
  }
}