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

        reviewId: 1,
        url:"https://a0.muscache.com/im/pictures/a20b94ff-4bf8-4c34-bf4c-4c910d3c7b8f.jpg?im_w=480"

      },
      {

        reviewId: 2,
        url:"https://a0.muscache.com/im/pictures/ab91a69d-9ed7-455a-820e-dc49d0a682da.jpg?im_w=480"

      },
      {

        reviewId: 5,
        url:"https://a0.muscache.com/im/pictures/60125b9c-4bc3-48a2-91c2-fafd92fa891c.jpg?im_w=1200"

      },
      {

        reviewId: 7,
        url:"https://a0.muscache.com/im/pictures/60125b9c-4bc3-48a2-91c2-fafd92fa891c.jpg?im_w=1200"

      },
      {

        reviewId: 9,
        url:"https://a0.muscache.com/im/pictures/prohost-api/Hosting-567352803762679376/original/b834b846-d81b-496c-9f65-ee9a92ae8e84.jpeg?im_w=1200"

      },
      {

        reviewId: 11,
        url:"https://a0.muscache.com/im/pictures/1d541730-69d9-4512-b5a5-56614b9688d7.jpg?im_w=720"

      },
      {

        reviewId: 23,
        url:"https://a0.muscache.com/im/pictures/miso/Hosting-740807800483774592/original/62e3190c-4ef9-4b05-9c3b-2e3d10bed535.jpeg?im_w=1200"

      },
      {

        reviewId: 26,
        url:"https://a0.muscache.com/im/pictures/miso/Hosting-30692949/original/fc244737-af9d-424e-a57d-92c259420468.jpeg?im_w=1200"

      },



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
