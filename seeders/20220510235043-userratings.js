// 'use strict';
// const falso = require('@ngneat/falso')
// const{User, Pet} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
//     const users = await User.findAll({ raw:true })
    
//     const petlist = await Pet.findAll({ raw: true })
    
//     const userratings = pets.map((a) => ({
//       userratings: falso.randCatchPhrase,
//       userId: users[Math.floor(Math.random() * users.length)].id,
//       petId: petlist[Math.floor(Math.random() * petlist.length)].id,
//       createdAt: new Date(),
//       updatedAt: new Date()
//     }))
//     await queryInterface.bulkInsert('userratings', userratings)
  },
  down: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkDelete('userratings')
  }
}