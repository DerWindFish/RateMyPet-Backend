'use strict';

const { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const pet = [
      {
        rating: `Jojo is a beautiful cat, only is probably plotting your down fall, has a lot of bizarre adventures. 12/10`,
        image_url: `https://imgur.com/9CadanF.jpeg`,
        userId: 1
      },
      {
        rating: `Riley is a model and absolutely always gets her way. 13/10 #DogGirlBoss`,
        image_url: `https://imgur.com/U1Izint.jpeg`,
        userId: 1
      },
      {
        rating: `Milo has had a ruff day and needs some beauty sleep. Same, Milo, same. 12/10`,
        image_url: `https://imgur.com/S893n9R.jpg`,
        userId: 1
      },
      {
        rating: `Yuki knows what you did, and she does not approve. 13/10 very perceptive`,
        image_url: `https://imgur.com/nHnZqMW.jpeg`,
        userId: 1
      },
      {
        rating: `Salazar here is proof that not all pets need to be fuzzy to be awesome! 15/10 Salazar, great job breaking the mold!`,
        image_url: `https://imgur.com/3dqlRtD.png`,
        userId: 1
      },
      {
        rating: `Big Kitty, loves boxes, loves you. 13/10 very supportive.`,
        image_url: `https://imgur.com/T2ge7C9.jpeg`,
        userId: 1
      },
      {
        rating: `Nobody is really sure if Tiana here is a dog or cryptid. That sort of confusion is why we love her. 12/10`,
        image_url: `https://imgur.com/ZnywW7Q.jpeg`,
        userId: 1
      },
      {
        rating: `Harvey is living like a king on this throne. You have my support, King Harvey. 14/10`,
        image_url: `https://imgur.com/QjGZsYE.jpg`,
        userId: 1
      },
      {
        rating: `Kit. Precious kitten. Would protect. 12/10`,
        image_url: `https://imgur.com/V7mwmMc.jpg`,
        userId: 1
      },
    ]

      await queryInterface.bulkInsert('pets', pet)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pets')
  }
};