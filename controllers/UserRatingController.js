const { User, Pet, UserRating } = require('../models')
const Sequelize = require('sequelize')


const GetUserRating = async (req, res) => {
  try {
    const rating = await User.findAll({
      include: [
        {
          model: Pet,
          as: 'user_rating' 
        }
      ]
    })
    res.send(list)
  } catch (error) {
    console.log(error)
  }
}

const CreateRating = async (req, res) => {
  try {
  await UserRating.bulkCreate(req.body, {
    fields:["userId", "petId"]
  })
  
    res.send('New Rating Posted!')
  } catch (error) {
    console.log(error)
  }
}

// const DeleteRating = async (req, res) => {
//   try {
//     await UserRating.destroy({ 
//       where:{
//       userId: req.params.user
//       }
//     })
//     res.send('Rating deleted!')
//   } catch (error) {
//     console.log(error)
//   }
// }

const DeleteSingleRating = async (req, res) => {
  try {
    await UserRating.destroy({
      where:{petId: req.params.pet,
      userId:req.params.user}
    })
    res.send('This rating is no more')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  GetUserRating,
  CreateRating,
//   DeleteWatchlist,
  DeleteSingleRating
}