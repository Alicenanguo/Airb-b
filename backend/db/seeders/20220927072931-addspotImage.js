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
      "SpotImages",
      [
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/2e5ce6c9-4935-49ce-891e-e6f7251a8590.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/f20e112f-7d72-4256-b862-0dd6c66d2b91.jpg?im_w=1200",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/be4a1956-7a66-4ec4-b8d7-db8b99bea6a9.jpg?im_w=1200",
                    preview: true,
        },
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/5d8bac36-44b6-456c-807c-b8a86e537a48.jpg?im_w=1200",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/6d19db42-aa39-436d-86fe-8ff36189d84d?im_w=1200",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/64f65389-96b3-4c5e-b8bf-7966dc16b55b?im_w=1200",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/674b0211-8c44-4887-81f2-65b9c6e48b9b?im_w=1200",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/monet/Luxury-53719772/original/a6e8f14f-a985-48be-a367-0f749283cdf4?im_w=1200",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/56467892-0d23-4ab1-8302-9c3d0d5e52cd.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/a7f86e41-3cf5-4994-bc84-ce9036138149.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/136a6623-0edc-4f45-b898-6ed6571dce7c.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/18e0b7f4-3c84-4302-a08a-c323ebedfe7d.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-14886949/original/a9d72542-cd1f-418d-b070-a73035f94fe4.jpeg?im_w=960",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-14886949/original/33ffc32e-393e-456f-9d3d-7cbc5d47ff04.jpeg?im_w=240",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-14886949/original/1de76753-6163-4206-92fb-c87b50fb7ac6.jpeg?im_w=240",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-14886949/original/48048260-2d58-4179-affd-be7a7ddeaa6b.jpeg?im_w=240",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/81723757/0ca3f969_original.jpg?im_w=1200",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/81723669/95b975f3_original.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/81723679/e5e479c0_original.jpg?im_w=1200",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/81723765/633f120b_original.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/a22e8b49-9e96-4da9-b5ab-6d7c63d191d6.jpg?im_w=1200",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/a855fd1a-7bee-4d8a-8c71-2e20e1647a20.jpg?im_w=240",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/fceeaee2-bbe7-4ba8-b0b8-06863e70017a.jpg?im_w=240",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/0aec8a6e-1d31-4ff2-b7d4-184d71a801cf.jpg?im_w=240",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/1ef9b49c-6f99-4018-95f9-8471a9fbbd15.jpg?im_w=960",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/ba348e08-f1de-4ab2-b11f-6bcdefb810ef.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/93cdf540-ee22-4d9b-b1c7-146d0b5b58f1.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/d3041174-4fd1-4199-a8ac-a44907d07bcc.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-51762485/original/4863199f-fffd-4d63-ba94-365ce2fbfe31.jpeg?im_w=960",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-51762485/original/60392984-6804-4611-b8ae-23d910bb2562.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-51762485/original/cf9a3667-34ac-4394-87e8-120eca3a4fb5.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-51762485/original/8de6e641-c4ac-46fc-9d87-a6f3b48ae73f.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-52797799/original/1e11a989-59a5-44d8-bfac-3e44bceafcc1.jpeg?im_w=960",
          preview: true,
        },
        {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-52797799/original/a30a66e3-9e48-4443-a9bc-d84de6f35c1b.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-52797799/original/1b05c37c-77e3-4a0e-b2ff-ee6288e18f6d.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-52797799/original/8df3998f-3cb2-4f17-8d81-83784ae0cc73.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/dd9cf0f0-57e0-42a5-aef6-b15e95ab0d40.jpg?im_w=960",
          preview: true,
        },
        {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/3a840c69-634a-414f-9800-cda805858f95.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/84ec6770-ac8f-4738-bd31-c0bd8b09edd1.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/3f64fd77-46ad-446f-be84-14e514b06a1e.jpg?im_w=720",
          preview: true,
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
    await queryInterface.bulkDelete("SpotImages", null, {});
  },
};
