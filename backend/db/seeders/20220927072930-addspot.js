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
    await queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: "123 Ave",
        city: "San Jose",
        state: "CA",
        country: "USA",
        lat: 25.1234567,
        lng: 30.7654321,
        name: "Abeey",
        description: "a pretty place",
        price:123
      },
      {
        ownerId: 2,
        address: "456 Ave",
        city: "Cupertino",
        state: "CA",
        country: "USA",
        lat: 156.1234567,
        lng: -987.7654321,
        name: "Jack",
        description: "an interesting place",
        price:456
      },
      {
        ownerId: 3,
        address: "789 Ave",
        city: "Sunnyvale",
        state: "CA",
        country: "USA",
        lat: 678.1234567,
        lng: 98.7654321,
        name: "Ruby",
        description: "a special place",
        price:789
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Spots', null, {})
  }
};
