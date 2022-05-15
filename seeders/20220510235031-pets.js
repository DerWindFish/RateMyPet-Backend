'use strict';

const { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const pet = [
      {
        rating: `Jojo is a beautiful cat, only is probably plotting your down fall, has a lot of bizarre adventures. 12/10`,
        image_url: `https://imgur.com/9CadanF.jpeg`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: `Riley is a model and absolutely always gets her way. 13/10 #DogGirlBoss`,
        image_url: `https://imgur.com/U1Izint.jpeg`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: `Milo has had a ruff day and needs some beauty sleep. Same, Milo, same. 12/10`,
        image_url: `https://imgur.com/S893n9R.jpg`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: `Yuki knows what you did, and she does not approve. 13/10 very perceptive`,
        image_url: `https://imgur.com/nHnZqMW.jpeg`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: `Salazar here is proof that not all pets need to be fuzzy to be awesome! 15/10 Salazar, great job breaking the mold!`,
        image_url: `https://imgur.com/3dqlRtD.png`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: `Big Kitty, loves boxes, loves you. 13/10 very supportive.`,
        image_url: `https://imgur.com/T2ge7C9.jpeg`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: `Nobody is really sure if Tiana here is a dog or cryptid. That sort of confusion is why we love her. 12/10`,
        image_url: `https://imgur.com/ZnywW7Q.jpeg`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: `Harvey is living like a king on this throne. You have my support, King Harvey. 14/10`,
        image_url: `https://imgur.com/QjGZsYE.jpg`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: `Kit. Precious kitten. Would protect. 12/10`,
        image_url: `https://imgur.com/V7mwmMc.jpg`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: `Dexter says blep. Blep. 14/10, blep.`,
        image_url: `https://imgur.com/1v3eXU1.png`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 'Ricky makes tunnels for a living, we love a working man. 11/10, working so hard!',
        image_url: `https://imgur.com/ozXY1hd.jpeg`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: `This is Ham. We're not sure what's going on with him either. 12/10`,
        image_url: 'https://imgur.com/Idl9TcL.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: `Wendy knows what your dreams are, and fully supports you in them, Wendy is here for all of your emotional support needs. 13/10 thanks Wendy!`,
        image_url: 'https://imgur.com/IMEgZ6u.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: `Kat is an absolute beauty. Never seen such a photogenic cat. 12/10`,
        image_url: `https://imgur.com/7hFDFJG.jpg`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: `Maya thinks you should crawl back into bed, we agree, Maya. 13/10 excellent advice.`,
        image_url: `https://imgur.com/oRe8da8.jpg`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: `Lucy looks like she's ready for an adventure, are are too, let's go Lucy! 12/10`,
        image_url: `https://imgur.com/iTllyph.jpg`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: `Desi knows you have a treat for her, go ahead and share with Desi, she deserves it. 11/10`,
        image_url: `https://imgur.com/prjbGU8.jpeg`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

      await queryInterface.bulkInsert('pets', pet)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pets')
  }
};