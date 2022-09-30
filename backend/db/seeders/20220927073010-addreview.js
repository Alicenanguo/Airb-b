'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Reviews', [
      {

        spotId: 1,
        userId: 1,
        review: "good place",
        stars: 5.5,

      },
      {

        spotId: 2,
        userId: 2,
        review: "not good",
        stars: 3.5,


      },
      {

        spotId: 3,
        userId: 3,
        review:"bad place",
        stars: 1,
      }
     ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Reviews', null, {})
  }
};
