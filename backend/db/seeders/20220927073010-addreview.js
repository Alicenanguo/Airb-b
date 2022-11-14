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
        review: "Amazing views and everything we needed for a comfortable stay. We saw a pod of about 20 dolphins and there were very few people on the beach. Already trying to figure out when we can come back.",
        stars: 5.0,

      },
      {

        spotId: 1,
        userId: 2,
        review: "This property is great. Super easy beach access and you couldn not ask for a better view. We saw whales from the room! Josephine was responsive whenever I had a question.",
        stars: 5.0,


      },
      {

        spotId: 1,
        userId: 3,
        review:"We had a perfect stay in the beautiful flat. The facilities are great, the view even better! We will definitly come back!",
        stars: 4.5,
      },
      {

        spotId: 1,
        userId: 4,
        review: "We loved our stay here! It was the most beautiful and peaceful location! Josephine is a great host. The place was very clean and comfortable.",
        stars: 4.5,

      },
      {

        spotId: 2,
        userId: 1,
        review: "This house was beautiful, we enjoyed the beach views and felt like Rajesh supplied everything any guest might need for a short visit. The master bed was so comfortable.",
        stars: 5.0,

      },
      {

        spotId: 2,
        userId: 2,
        review: "Rajesh's home, just steps away from the ocean and sandy beach is stunning!! Beautiful views, thoughtful amenities and location was the perfect choice for a weekend getaway.",
        stars: 4.6,

      },
      {

        spotId: 2,
        userId: 3,
        review: "Fantastic location. Closer to the ocean is not possible. House is a bit older, but everything is in good shape and very clean. Very nice contact.",
        stars: 4.8,

      },
      {

        spotId: 3,
        userId: 4,
        review: "Beautiful house and the garden was stunning. Great quiet location. The hot tub was super clean too. We had a great stay.",
        stars: 4.8,

      },
      {

        spotId: 3,
        userId: 5,
        review: "Wonderful place. Well done house that had a fantastic kitchen. Owners put a lot of time into making the place look fantastic! Great location. Quite and super comfortable.",
        stars: 4.5,

      },
      {

        spotId: 3,
        userId: 3,
        review: "Loved this house…the design, the comfort, the location!!! It was a perfect size for 6 people and we all had room to hang out and relax!",
        stars: 4.8,

      },
      {

        spotId: 4,
        userId: 1,
        review: "Very friendly & responsive communication. Easy check-in & -out. Clean, comfy & well-maintained house, perfect for girls weekend away. Location was excellent",
        stars: 4.8,

      },
      {

        spotId: 4,
        userId: 3,
        review: "This house is a gem! Such a great location on the West Side in a charming neighborhood. The space is clean, open and was comfortable for a group of us to relax for the weekend. ",
        stars: 4.7,

      },
      {

        spotId: 4,
        userId: 2,
        review: "Beautiful house and the garden was stunning. Great quiet location. The hot tub was super clean too. We had a great stay.",
        stars: 5.0,

      },
      {

        spotId: 5,
        userId: 3,
        review: "We loved our stay at this beautiful place- everything worked great, check in was easy and the view is absolutely epic. The beach is a walk away and the sunsets are the best!",
        stars: 4.6,

      },
      {

        spotId: 5,
        userId: 2,
        review: "Another fabulous visit to Ocean Beach! The location is amazing, the house is fabulous, and we had a restful time with family. What else to say, but we'll be back!",
        stars: 4.9,

      },
      {

        spotId: 5,
        userId: 5,
        review: "Absolutely beautiful home! Very clean. Clear instructions, notebook with recommendations and labels on light switches.",
        stars: 5.0,

      },
      {

        spotId: 5,
        userId: 4,
        review: "Great view, clean hot tub, ample cookware! Lots of pros here! Thanks for the stay.",
        stars: 4.7,

      },
      {

        spotId: 6,
        userId: 4,
        review: "Excellent view! Manzanita is such a cool coast town. This spot is all bout location.",
        stars: 4.8,

      },
      {

        spotId: 6,
        userId: 3,
        review: "Unfortunately there was quite a bit of false advertising in this site. The first and foremost was the hot tub. Ada major highlight and of the house, the fact that it was not working super irritating. ",
        stars: 3.5,

      },
      {

        spotId: 6,
        userId: 2,
        review: "Excellent home with a great view and amenities. Close to everything in town and in a great spot to get to the beach quickly.",
        stars: 4.5,

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
     await queryInterface.bulkDelete('Reviews', null, {})
  }
};
