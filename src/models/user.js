'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    first_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(250),
      unique: true,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    profile_img: {
      type: DataTypes.TEXT,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'User',
    // if you want different table name than model name then you can use below option
    // tableName: "users",
  });
  return User;
};