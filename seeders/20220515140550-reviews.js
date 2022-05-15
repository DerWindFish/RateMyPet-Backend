'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const review = [
      {
        name: 'PetFan14',
        review: `This is literally the greatest website I've ever been on in my 89 years on this planet. 18/10 I like it.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Derk',
        review: 'I was sceptical at first about how good a website about rating pets could be. Turns out it`s pretty great.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '2N-Genn',
        review: 'Jojo is my cat and I lover her so this site is cool.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert('reviews', review)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reviews')
  }
};
