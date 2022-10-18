"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Spots",
      [
        {
          ownerId: 1,
          address: "295 miles away",
          city: "Malibu",
          state: "California",
          country: "USA",
          lat: 25.1234567,
          lng: 30.7654321,
          name: "luxury house",
          description:
            "Eagle's Watch is one of Malibu's most famous houses, designed by legendary architect Harry Gesner. Stay in ultimate luxury in this one of a kind serene modern marvel.",
          price: 1179,
        },
        {
          ownerId: 2,
          address: "391 miles away",
          city: "Joshua Tree",
          state: "California",
          country: "USA",
          lat: 156.1234567,
          lng: -987.7654321,
          name: "Stone Style",
          description:
            "This is the famous Kellogg Doolittle estate in Joshua Tree California. It is one of the most exclusive homes in the world,",
          price: 6500,
        },
        {
          ownerId: 3,
          address: "487 miles away",
          city: "Cedar City",
          state: "Utah",
          country: "USA",
          lat: 678.1234567,
          lng: 98.7654321,
          name: "Tree House",
          description:
            "Make sure to catch the world-famous Shakespeare festival. Cedar City is known as Festival City for a good reason!",
          price: 129,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Spots", null, {});
  },
};
