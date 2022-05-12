const { Pet } = require('../models')

const GetPets = async (req, res) => {
  try {
    const pets = await Pet.findAll()
    res.send(pets)
  } catch (error) {
    throw error
  }
}

module.exports = {
	GetPets
}