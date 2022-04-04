'use strict';
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currency', {
    unit: DataTypes.STRING
  }, {});
  Currency.associate = function (models) {
    Currency.hasMany(models.Product, { foreignKey: 'currencyId', onDelete: 'cascade', hooks: true })
  };
  return Currency;
};
