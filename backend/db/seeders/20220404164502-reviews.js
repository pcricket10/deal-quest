'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        productId: 1,
        content: "review one"
      },
      {
        userId: 2,
        productId: 1,
        content: "review two"
      },
      {
        userId: 3,
        productId: 1,
        content: "review three"
      },
      {
        userId: 4,
        productId: 1,
        content: "review four"
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
