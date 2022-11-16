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
      {

        spotId: 7,
        userId: 4,
        review: "This house has the greatest view ever. It's at the end of a dirt road which seems a challenge in the beginning but turns out to be quite manageable.",
        stars: 4.5,

      },
      {

        spotId: 8,
        userId: 5,
        review: "This house is absolutely amazing, there isn't anything that hasn't been thought of. We plan on returning as regulars, and you will absolutely love this beautiful home.",
        stars: 4.7,

      },
      {

        spotId: 8,
        userId: 1,
        review: "Amazing! Perfect, most relaxing getaway you could ask for. Super clean, beautiful, well appointed, easy. Kitchen was fun to cook in and has everything you need.",
        stars: 4.3,

      },
      {

        spotId: 9,
        userId: 3,
        review: "The coziest getaway with every amenity you might need. We can't wait to come back!",
        stars: 4.0,

      },
      {

        spotId: 9,
        userId: 2,
        review: "We have stayed in 3 other airbnbs on vacations this year, and this one was by far our favorite! The time and detail that was put into making this a cozy retreat was amazing!",
        stars: 4.0,

      },
      {

        spotId: 10,
        userId: 1,
        review: "What an amazing cabin! Kate and Gabe were so lovely and accommodating. Really appreciated the EV charger and all of their recommendations in big bear. Thanks for having us, guys!",
        stars: 4.6,

      },
      {

        spotId: 10,
        userId: 3,
        review: "Awesome cozy cabin! Very silent place. Kate and Gabe were super-responsive and helpful.",
        stars: 4.5,

      },
      {

        spotId: 11,
        userId: 3,
        review: "This place is absolutely amazing! I am a local to the area and grew up just 45 minutes from here and I was still in awe of how beautiful of an experience this was.",
        stars: 4.3,

      },
      {

        spotId: 11,
        userId: 5,
        review: "Haley's place was stunning! It's hard to decide if it was more beautiful at sunset or sunrise. Was worth it to go in the fall and see the pretty colors!",
        stars: 4.5,

      },
      {

        spotId: 12,
        userId: 5,
        review: "Gorgeous place, ultimate luxury in every aspect, heartfelt hospitality, so grateful for this stay!",
        stars: 4.2,

      },
      {

        spotId: 12,
        userId: 4,
        review: "The place is gorgeous with a lovely view of the valley and very close to Joshua Tree National Park. The jacuzzi was lovely and the outdoor shower was great in the morning!",
        stars: 4.6,

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
