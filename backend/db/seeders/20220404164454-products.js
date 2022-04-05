'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Products', [{
      userId: 1,
      name: 'Master Ball',
      imgUrl: 'https://static.wikia.nocookie.net/pokemon/images/a/a1/Master_Ball_Sprite.png',
      price: 999999999999,
      currencyId: 1
    },
    {
      userId: 1,
      name: 'Hyper Potion',
      imgUrl: 'https://static.wikia.nocookie.net/pokemon/images/2/2c/Hyper_Potion_Sprite.png',
      price: 1200,
      currencyId: 1
    },
    {
      userId: 5,
      name: 'Burn Heal',
      imgUrl: 'https://static.wikia.nocookie.net/pokemon/images/f/f4/Dream_Burn_Heal_Sprite.png',
      price: 250,
      currencyId: 1
    },
    {
      userId: 2,
      name: 'Deku Shield',
      imgUrl: 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/34/OoT3D_Deku_Shield_Icon.png',
      price: 40,
      currencyId: 2
    },
    {
      userId: 2,
      name: 'Magic Mirror',
      imgUrl: 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/e/e5/ALttP_Magic_Mirror_Sprite.png',
      price: 5000,
      currencyId: 2
    },
    {
      userId: 6,
      name: 'Ocarina Of Time',
      imgUrl: 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/bc/OoT3D_Ocarina_of_Time_Icon.png',
      price: 30000,
      currencyId: 2
    },
    {
      userId: 3,
      name: '1-up Mushroom',
      imgUrl: 'https://static.wikia.nocookie.net/mario/images/0/0a/Classic_1-up.png',
      price: 1000,
      currencyId: 3
    },
    {
      userId: 3,
      name: 'Starman',
      imgUrl: 'https://static.wikia.nocookie.net/mario/images/3/31/SMB3Star.png',
      price: 5000,
      currencyId: 3
    },
    {
      userId: 7,
      name: 'Blue Shell',
      imgUrl: 'https://static.wikia.nocookie.net/mario/images/b/b6/MK64SpinyShell.jpg',
      price: 5000,
      currencyId: 3
    },
    {
      userId: 4,
      name: 'Buster Sword',
      imgUrl: 'https://static.wikia.nocookie.net/finalfantasy/images/9/9a/Buster_sword_2_FF7.png',
      price: 1500,
      currencyId: 4
    },
    {
      userId: 4,
      name: 'Fire Materia',
      imgUrl: 'https://static.wikia.nocookie.net/finalfantasy/images/8/8d/Magic_Materia_from_FFVII_Remake.png',
      price: 600,
      currencyId: 4
    },
    {
      userId: 8,
      name: 'Phoenix Down',
      imgUrl: 'https://static.wikia.nocookie.net/finalfantasy/images/8/8f/Phoenix_Down_FF7.png',
      price: 300,
      currencyId: 4
    },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Products', null, {});
  }
};
