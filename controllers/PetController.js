const { Pet } = require('../models')

const GetAllPets = async (req, res) => {
  try {
    const pets = await Pet.findAll()
    res.send(pets)
  } catch (error) {
    throw error
  }
}

module.exports = {
	GetAllPets
}