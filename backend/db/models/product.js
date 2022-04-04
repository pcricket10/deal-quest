'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    imgUrl: {
      allowNull: false,
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    currencyId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Product.allProducts = async function () { return await Product.findAll() }
  Product.associate = function (models) {
    Product.belongsTo(models.User, { foreignKey: 'userId' })
    Product.belongsTo(models.Currency, { foreignKey: 'currencyId' })
    Product.hasMany(models.Review, { foreignKey: 'productId', onDelete: 'cascade', hooks: true })
  };
  return Product;
};
