'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cartItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cartItems.belongsTo(models.Users, { foreignKey: 'userId', onDelete: 'CASCADE' })
    }
  };
  cartItems.init({
    product: DataTypes.STRING,
    qty: DataTypes.STRING,
    price: DataTypes.STRING,
    amount: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cartItems',
  });
  return cartItems;
};