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
        {
          ownerId: 2,
          address: "725 Donner Dr",
          city: "Driggs",
          state: "Idaho",
          country: "USA",
          lat: 47.1234567,
          lng: 68.7654321,
          name: "6 Bedroom Horseshoe Lane",
          description:
            "This 6 bed, 4.5 bath home located on the western side of the valley offers everything you and your guests need plus so much more. Starting outside, enjoy an expansive lot, beautiful landscaping, a full-sized outdoor dining area, and your very own basketball court, all while taking in that priceless, four-peak Teton Range view. Inside, find space and amenities galore.",
          price: 1058,
        },
        {
          ownerId: 1,
          address: "888 Harold Ave",
          city: "Bollivar",
          state: "Texas",
          country: "USA",
          lat: 48.1234567,
          lng: 69.7654321,
          name: "Beach Access, Tiki Bar, Games, Pets",
          description:
            "Paradise and relaxation await at Shore Thing Oasis! This private beach house is the perfect spot for your next family or group vacation.",
          price: 195,
        },
        {
          ownerId: 4,
          address: "307 Muir Ave",
          city: "Gardern Valley",
          state: "Idaho",
          country: "USA",
          lat: 49.1234567,
          lng: 70.7654321,
          name: "Röra Haus - A Modern, Mountain A-frame",
          description:
            "Welcome to Röra Haus! Our modern A-frame is nestled in the Valley High community in Garden Valley.  Minutes from Crouch,  Terrace Lakes Golf Course, outdoor theatre, hiking & biking trails and the Payette River. It's a prefect place to unwind, relax and spend time outdoors.",
          price: 230,
        },
        {
          ownerId: 1,
          address: "651 Brian Ln",
          city: "Big Bear Lake",
          state: "California",
          country: "USA",
          lat: 50.1234567,
          lng: 71.7654321,
          name: "Serene Modern Cabin - Ski + Hot Tub + Sled Hill",
          description:
            "The Knoll Nook, located in Lower Moonridge - Big Bear Lake's most desirable neighborhood - is tucked against a secluded hillside and rests on a quiet cul de sac road. With a 1/3 acre of peaceful forest-like space, this is a spot for travelers to reset, relax, and recharge.",
          price: 375,
        },
        {
          ownerId: 3,
          address: "389 Blake Ave",
          city: "Candler",
          state: "North Carolina",
          country: "USA",
          lat: 51.1234567,
          lng: 72.7654321,
          name: "Pisgah Highlands off grid cabin",
          description:
            "Come escape to our tiny modern off grid cabin situated in the middle of our private 125 acre mountain top property which backs up to Pisgah National Forest. Wake up to soaring mountain views, hike all day on the Blue Ridge Parkway, grill out and make S'mores over the fire pit.",
          price: 119,
        },
        {
          ownerId: 5,
          address: "666 Scoot Ave",
          city: "Joshua Tree",
          state: "California",
          country: "USA",
          lat: 52.1234567,
          lng: 73.7654321,
          name: "Villa Kuro - A Serene and Minimal Hideaway",
          description:
            "Designed with tranquility and relaxation in mind, Villa Kuro is a minimal organic modern hideaway fusing natural simplicity with contemporary luxuries.  Nestled on an unfenced 3.6 acres in front of a boulder hill, the property goes all the way up to the peak of the mountain.",
          price: 555,
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
