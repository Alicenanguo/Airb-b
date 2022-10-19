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
          address: "295 Malibu Ave ",
          city: "Malibu",
          state: "California",
          country: "USA",
          lat: 25.1234567,
          lng: 30.7654321,
          name: "EAGLE'S WATCH MALIBU",
          description:
            "Eagle's Watch is one of Malibu's most famous houses, designed by legendary architect Harry Gesner. Stay in ultimate luxury in this one of a kind serene modern marvel.",
          price: 1179,
        },
        {
          ownerId: 2,
          address: "391 miles Lane",
          city: "Joshua Tree",
          state: "California",
          country: "USA",
          lat: 156.1234567,
          lng: -87.7654321,
          name: "The Kellogg Doolittle House",
          description:
            "This is the famous Kellogg Doolittle estate in Joshua Tree California. It is one of the most exclusive homes in the world,",
          price: 6500,
        },
        {
          ownerId: 3,
          address: "487 Cedar Ave",
          city: "Cedar City",
          state: "Utah",
          country: "USA",
          lat: 78.1234567,
          lng: 98.7654321,
          name: "Hobbit Cottage",
          description:
            "Make sure to catch the world-famous Shakespeare festival. Cedar City is known as Festival City for a good reason!",
          price: 129,
        },
        {
          ownerId: 1,
          address: "799 Rainbow Dr",
          city: "Cupertino",
          state: "California",
          country: "USA",
          lat: 45.1234567,
          lng: 121.7654321,
          name: "Caboose in the redwoods",
          description:
            "There are lots of nearby hiking and biking trails, as well as other exciting outdoor activities.",
          price: 190,
        },
        {
          ownerId: 2,
          address: "5940 Sunset Dr",
          city: "El Port de la Selva",
          state: "Catalonia",
          country: "Spain",
          lat: 145.1234567,
          lng: 21.7654321,
          name: "Sunflower House",
          description:
            "Beautiful 4 bedroom architecturally designed villa, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Spain.",
          price: 342,
        },
        {
          ownerId: 3,
          address: "319 Robert Dr",
          city: "Drimnin",
          state: "Scotland",
          country: "United Kingdom",
          lat: 59.1234567,
          lng: 31.7654321,
          name: "AirShip with Breathtaking Highland Views",
          description:
            "AirShip 2 is an iconic, insulated aluminum pod designed by Roderick James with views of the Sound of Mull from dragonfly windows. Airship002 is comfortable, quirky and cool. It does not pretend to be a five star hotel.",
          price: 187,
        },
        {
          ownerId: 1,
          address: "263 urubamba Ave",
          city: "Urubamba",
          state: "Uru",
          country: "Peru",
          lat: 155.1234567,
          lng: 64.7654321,
          name: "Skylodge Adventure Suites",
          description:
            "Have you ever wanted to sleep in a condor’s nest? Here is the next best thing! A transparent luxury capsule that hangs from the top of a mountain in the Sacred Valley of Peru.",
          price: 430,
        },
        {
          ownerId: 2,
          address: "1000 Cottage Ave",
          city: "Koniakow",
          state: "Slaskie",
          country: "Poland",
          lat: 55.1234567,
          lng: 37.7654321,
          name: "Poli settlement",
          description:
            "The village has 5 Icelandic cottages. Each cottage comes with a patio with a seating set and barbecue. Cottages are fully equipped, including separate access to wifi, making it easy to connect with remote work.",
          price: 168,
        },
        {
          ownerId: 3,
          address: "888 Mexico Ave",
          city: "Brisas",
          state: "Oaxaca",
          country: "Mexico",
          lat: 75.1234567,
          lng: 32.7654321,
          name: "Casa WO- Oasis",
          description:
            "Just a six-minute walk from the beach in the hip La Punta neighborhood of Puerto Escondido sits CASA WO, a modern oasis and architectural marvel in the Mexican state of Oaxaca. ",
          price: 425,
        },
        {
          ownerId: 1,
          address: "666 stone Dr",
          city: "Cameron",
          state: "Arizona",
          country: "USA",
          lat: 175.1234567,
          lng: 88.7654321,
          name: "Experience Hogan by the River ",
          description:
            "Located in a secluded and remote location of the Western Navajo Nation, our home is easily accessible to local restaurants, stores, and not far from two natural wonders, the Grand Canyon and Monument Valley.",
          price: 215,
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
