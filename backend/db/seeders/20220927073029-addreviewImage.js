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
    await queryInterface.bulkInsert("ReviewImages", [
      {
        id:1,
        reviewId: 1,
        url:"image1 url"

      },
      {
        id:2,
        reviewId: 2,
        url:"image2 url"

      },
      {
        id:3,
        reviewId: 3,
        url:"image3 url"

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
  }
};
