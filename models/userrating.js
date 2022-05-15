'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // UserRating.belongsToMany(models.Pet, {
      //   through: models.Rating,
      //   as: 'user_rating',
      //   foreignKey: 'userRatingId'
      // })
    }
  }
  UserRating.init({
    userrating: DataTypes.STRING,
      }, {
    sequelize,
    modelName: 'UserRating',
    tableName: 'userratings'
  });
  return UserRating;
};