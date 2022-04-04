'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [

      {
        email: 'ash@pallettown.com',
        username: 'AshKetchum',
        hashedPassword: bcrypt.hashSync('IChooseYou')
      },
      {
        email: 'link@hyrule.com',
        username: 'Link',
        hashedPassword: bcrypt.hashSync('GanonSux')
      },
      {
        email: 'mario@mushroomkingdom.com',
        username: 'MarioMario',
        hashedPassword: bcrypt.hashSync('It\'s a me')
      },
      {
        email: 'cloud@midgar.com',
        username: 'CloudStrife',
        hashedPassword: bcrypt.hashSync('I<3Aerith')
      },
      {
        email: 'gary@pallettown.com',
        username: 'GaryOak',
        hashedPassword: bcrypt.hashSync('SmellYaL8r')
      },
      {
        email: 'ganon@hyrule.com',
        username: 'Ganondorf',
        hashedPassword: bcrypt.hashSync('LinkSux')
      },
      {
        email: 'bowser@mushroomkingdom.com',
        username: 'Bowser',
        hashedPassword: bcrypt.hashSync('MarioSux')
      },
      {
        email: 'sephiroth@midgar.com',
        username: 'Sephiroth',
        hashedPassword: bcrypt.hashSync('OneWingedAngel12')
      },
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },


    ], {});
  },

  down: (queryInterface, Sequelize) => {

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
