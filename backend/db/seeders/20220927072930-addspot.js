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
          address: "295 rainbow Dr",
          city: "Watsonville",
          state: "California",
          country: "USA",
          lat: 25.1234567,
          lng: 30.7654321,
          name: "Magical & Romantic Beachfront Home",
          description:
            "Beautiful oceanfront condominium with an unobstructed view to Monterey Bay & the Pacific Ocean;  just 20 minutes south of Santa Cruz & 30 minutes north of Monterey/Carmel. ",
          price: 275,
        },
        {
          ownerId: 2,
          address: "391 Bloom Ln",
          city: "Moss Landing",
          state: "California",
          country: "USA",
          lat: 56.1234567,
          lng: -87.7654321,
          name: "Oceanfront Beach House",
          description:
            "Our beautiful beach home is the perfect place for a family vacation. The gated/private front patio is equipped with a bbq grill and a shaded conversation/dining set.",
          price: 650,
        },
        {
          ownerId: 3,
          address: "487 Monta Vista Ln",
          city: "Santa Cruz",
          state: "California",
          country: "USA",
          lat: 79.1234567,
          lng: 99.7654321,
          name: "Relaxing West Cliff Escape with Hot Tub!",
          description:
            "This spacious house is perfect for a relaxing family getaway! Enjoy the backyard, hot tub, and quiet neighborhood while still being close enough to walk to the beach and many other attractions!",
          price: 302,
        },
        {
          ownerId: 4,
          address: "123 Brook Ln",
          city: "Lopez Island",
          state: "Washington",
          country: "USA",
          lat: 80.1234567,
          lng: 65.7654321,
          name: "Stylish waterfront oasis",
          description:
            "Absolutely gorgeous inside and out, this modern, wooded sanctuary is a luxury home on Lopez Island, set in a secluded forest on a dramatic waterfront bluff, offering plenty of privacy just walking distance from the ferry.",
          price: 351,
        },
        {
          ownerId: 5,
          address: "369 Arnold Way",
          city: "Manchester",
          state: "California",
          country: "USA",
          lat: 45.1234567,
          lng: 66.7654321,
          name: "Ocean Road",
          description:
            "Private ocean-front home on bluff with unobstructed ocean views above Irish Beach. First-class amenities and furnishings to sleep six. Watch whales and sunsets from the hot tub on the deck. A spectacular getaway!",
          price: 355,
        },
        {
          ownerId: 1,
          address: "234 Poplar St",
          city: "Manzanita",
          state: "Oregon",
          country: "USA",
          lat: 46.1234567,
          lng: 67.7654321,
          name: "Beachfront home with a hot tub",
          description:
            "Ocean's Doorstep has spectacular views that will leave you breathless. The views from the home span from Neah-Kah-Nie mountain down the beautiful sandy beaches of Manzanita towards the jetty.",
          price: 350,
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
