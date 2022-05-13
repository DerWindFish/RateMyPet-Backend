'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const userratings = [
     {
       userrating: '10/10, Pretty cute',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userrating: `11/10, They're Great!`,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       userrating: `12/10, Heckin' Adorable`,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      userrating: `13/10, I'd vote for them for President`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userrating: `14/10, This is the GREATEST Pet I've ever seen!!`,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ] 

    await queryInterface.bulkInsert('userratings', userratings)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userratings')
  }
}