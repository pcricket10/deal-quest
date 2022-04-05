'use strict';
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currency', {
    unit: DataTypes.STRING
  }, {});

  // Currency.findCurrencyById = async function (id) {
  //   return await Currency.findByPk(id);
  // }

  Currency.associate = function (models) {
    Currency.hasMany(models.Product, { foreignKey: 'currencyId', onDelete: 'cascade', hooks: true })
  };
  return Currency;
};
