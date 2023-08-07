// import important parts of sequelize library
import { Model, DataTypes } from 'sequelize';
// import our database connection from config.js
import sequelize from '../config/connection';

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

export default Product;
