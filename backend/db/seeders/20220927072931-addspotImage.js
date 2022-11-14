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
          url: "https://a0.muscache.com/im/pictures/636cc221-8ed7-444a-b055-5eef10d7bd35.jpg?im_w=1200",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/ebf1a50d-1f37-4cfc-a593-d3a0842e91ff.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/32d07c83-fb72-4f3c-8d03-9fe175707d23.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/18e736db-d02f-439f-baee-1298293b9a1e.jpg?im_w=1200",
          preview: false,
        },
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/493e7a26-0645-469a-8b3f-af1153f13386.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/b29cf85f-0be2-4be7-84ed-398194fb9111.jpg?im_w=1200",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/0a54ea84-71b1-431a-a8a2-7767c6b0bdb1.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/1ffd450f-34da-4e0a-9935-373e7127dd29.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/afb3a5d9-933c-4b0c-bbef-158d1f06087b.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/e722ad32-8a35-464f-b23a-52e2c883fd67.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-567352803762679376/original/747bcff2-b467-4328-b71e-26d5266f34f5.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-567352803762679376/original/13aa6910-50f2-4eb5-bbce-704800616c8e.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-567352803762679376/original/0df41f5d-9bca-4ad8-bd92-d649248e6039.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-567352803762679376/original/0ca431db-f6d6-4b49-ad1e-dfaf722fa7b9.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-567352803762679376/original/06085206-b23d-403b-a7c7-fcf84269225c.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-624018740377905048/original/738c71e0-c68c-4f8e-809a-826c4f6c27a0.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-624018740377905048/original/8d7807d2-9557-4757-ae00-b1cad54b94da.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-624018740377905048/original/0f9f7471-ddc1-4eed-a25a-2df69f5bae0e.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-624018740377905048/original/0c8dcd15-af42-4aa6-95a1-8880ab7c920c.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-567352803762679376/original/06085206-b23d-403b-a7c7-fcf84269225c.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/347136ce-5e02-4a90-86d1-8d96a0e12354.jpg?im_w=1200",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/9902c892-d625-4e38-9173-ec8b01e915db.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/114908c8-41da-4e72-bca8-85a02a44d292.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/26005915-44ea-42f6-b672-7872947586fb.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/b1b0d6e7-1053-4dc3-ad46-dbdcf3b84f72.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-656317835929411072/original/cce0e92b-6f44-4aec-bcfd-5a2d4bd73c26.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-656317835929411072/original/87723795-621f-4cd4-8c29-b73befa4cc0d.jpeg?im_w=7200",
          preview: false,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-656317835929411072/original/2c7bd236-a21d-4333-87f7-890420cb7469.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-656317835929411072/original/91b6ce72-1a5f-4818-8a7d-af2c84b5e82d.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-656317835929411072/original/42c38cb8-1b6b-4d9f-97a8-8e28a3df81f8.jpeg?im_w=720",
          preview: false,
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
