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
    await queryInterface.bulkInsert('Bookings', [
      {

        spotId: 1,
        userId: 1,
        startDate:new Date("2011-11-1"),
        endDate:new Date("2011-11-3")
      },
      {

        spotId: 2,
        userId: 2,
        startDate: new Date("2012-1-10"),
        endDate:new Date("2012-1-20")
      },
      {

        spotId: 3,
        userId: 3,
        startDate:new Date("2015-9-10"),
        endDate:new Date("2015-9-15")
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
     await queryInterface.bulkDelete('Bookings', null, {})
  }
};
