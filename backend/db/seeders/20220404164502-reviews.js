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
        title: "review one",
        content: "Goron certainly Princess Ruto precisely Hyrule Master Sword heavily well Hyrule exactly literally Bongo Bongo hopefully relatively very effectively totally very clearly might wherever especially Majora Din significantly easily completely whenever usually mostly effectively wherever too Deku Boomerang Majora real well generally obviously Great Fairy precisely very truly perhaps Bombchu might very slightly"
      },
      {
        userId: 2,
        productId: 1,
        title: "review two",
        content: "probably Tingle anyway virtually most necessarily certainly Hyrule Great Fairy stuff highly Boomerang amazing Bongo Bongo seriously Goron probably fairly right apparently mostly extremely approximately stuff Malon try okay primarily much Zora clearly approximately actually okay generally totally entirely just Impa hopefully try heavily obviously necessarily real extremely Farore Master Sword certainly Nayru"
      },
      {
        userId: 3,
        productId: 1,
        title: "review three",
        content: "Link approximately frankly ultimately generally obviously particularly Zelda amazing try certainly Din Din Nayru totally especially much apparently essentially fairly Dampé Hyrule typically specifically very fairly whenever completely well apparently usually primarily definitely Nayru truly clearly like apparently certainly Master Sword simply Ganon strongly definitely Darunia precisely specifically approximately easily Hyrule"
      },
      {
        userId: 4,
        productId: 1,
        title: "review four",
        content: "whenever virtually highly wherever strongly whenever clearly Goron Link amazing specifically Epona Sheik Darunia badly perhaps approximately possibly hopefully typically Zora Tingle anyway Nayru mostly heavily truly Ganon simply literally things probably extremely Sheik easily heavily very okay very exactly badly stuff simply wherever typically possibly basically Rauru Triforce"
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
