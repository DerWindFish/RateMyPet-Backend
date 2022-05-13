'use strict';
const falso = require('@ngneat/falso')
const{Pet} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    // const petlist = await Pet.findAll({ raw: true })
    
    // const userratings = petlist.map((a) => ({
    //   userratings: falso.randCatchPhrase(),
    //   petId: petlist[Math.floor(Math.random() * petlist.length)].id,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }))
    // await queryInterface.bulkInsert('userratings', userratings)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userratings')
  }
}