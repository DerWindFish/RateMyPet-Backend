'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Pet.hasMany(models.UserRating, {foreignKey: 'petId'})
      Pet.belongsToMany(models.Pet, {
        as: 'rated',
        through: models.UserRating,
        foreignKey: 'petId'
      }),
      Pet.belongsToMany(models.Pet, {
        as: 'userrating',
        through: models.UserRating,
        foreignKey: 'ratingId'
      })
    }
  }
  Pet.init({
    rating: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pet',
    tableName: 'pets'
  });
  return Pet;
};
// 'use strict';
// const {Model} = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Pet extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       Pet.belongsTo(models.User, {
//         through: models.UserRating,
//         as: 'pet',
//         foreignKey: 'petId'
//       })
//     }
//   }
//   Pet.init({
//     rating: DataTypes.STRING,
//     image_url: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Pet',
//     tableName: 'pets'
//   });
//   return Pet;
// };