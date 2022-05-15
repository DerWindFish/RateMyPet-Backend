const { Pet } = require('../models')

const GetPets = async (req, res) => {
  try {
    const pets = await Pet.findAll()
    res.send(pets)
  } catch (error) {
    throw error
  }
}

const AddPets = async (req, res) => {
  try {
    const { image_url, rating } = req.body
    const pets = await Pet.create({ image_url, rating })
    res.send(pets)

  } catch (error) {
    throw error
  }
}

module.exports = {
	GetPets,
  AddPets
}