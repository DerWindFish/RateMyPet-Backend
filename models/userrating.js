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
      UserRating.belongsTo(models.Pet, { foreignKey: 'petId'})
    }
  }
  UserRating.init({
    userrating: DataTypes.STRING,
  //   userId: {
  //     type: DataTypes.INTEGER,
  //     onDelete: 'CASCADE',
  //     references: {
  //       model: 'users',
  //       key: 'id'
  //     }
  //   },
    petId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'pets',
        key: 'id'
      },
    ratingId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'pets',
        key: 'id'
      }
    }
    }
  }, {
    sequelize,
    modelName: 'UserRating',
    tableName: 'userratings'
  });
  return UserRating;
};