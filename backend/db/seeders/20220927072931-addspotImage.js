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
          url: "https://a0.muscache.com/im/pictures/4e367eea-801c-43fa-a7f0-4020a57ac21e.jpg?im_w=720",
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
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-735542330357205664/original/8b8ebac7-b4b7-43d1-a995-cc849c3179e4.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-735542330357205664/original/7969c4f7-af0c-401f-90ae-f3d7b7f0c2a2.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-735542330357205664/original/8feb1ddb-fa03-45ba-a3ad-321dd43821f2.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-735542330357205664/original/fa7140a9-7561-4428-adef-254632d687dd.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-735542330357205664/original/55fcc960-9a5c-4d14-95a4-b8b88d23d3a6.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-740807800483774592/original/6491cdaf-0dfa-46ad-b93a-a3f05382cbb1.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-740807800483774592/original/27002407-70d1-418a-adff-5ac98789ebf6.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-740807800483774592/original/9719babc-49bb-40c7-ae7a-13cdb08421d2.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-740807800483774592/original/221e024f-9800-4ed8-9c36-b538101207f4.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-740807800483774592/original/432a3f58-0b5d-41a1-804f-87bfc44aae5e.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/0510a628-3851-43bd-a3d2-34827d680c02.jpg?im_w=1200",
          preview: true,
        },
        {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/c7c67ec9-28ea-49f1-b637-b577846e7a65.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/fa302eec-1cf7-469f-b363-a4f99b4108e9.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/2acd7948-1613-4717-ada6-277096b9ab08.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/0839f426-e294-4f5f-aaff-f3aded12dea9.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/f038db3f-c584-4ced-a207-6f5b33809aff.jpg?im_w=1200",
          preview: true,
        },
        {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/38bfc171-ee5d-4ae9-a6e2-768bc9a301b3.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/59a00b53-dc8e-4125-b97d-0ff216d5a9fa.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/00aef93c-84b6-445d-9081-6a9b2bf5e804.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/6d4aa806-150a-4700-8672-d76cd1c9e34c.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 11,
          url: "https://a0.muscache.com/im/pictures/7d1f5d9e-e8ed-44b0-a06e-3b5aade26264.jpg?im_w=1200",
          preview: true,
        },
        {
          spotId: 11,
          url: "https://a0.muscache.com/im/pictures/ebbe2232-0c0f-416c-896f-d3dcdb1c0613.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 11,
          url: "https://a0.muscache.com/im/pictures/f11a48cd-06a8-4dad-a994-36f0ae0f0c87.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 11,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-16067918/original/523050f9-5744-459c-bfaf-f49610c19bd1.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 11,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-16067918/original/ebd1aade-16f4-460e-b604-d10beedc121b.jpeg?im_w=720",
          preview: false,
        },
        {
          spotId: 12,
          url: "https://a0.muscache.com/im/pictures/974d5d84-b58e-4ca4-aa77-4159b2bb7beb.jpg?im_w=1200",
          preview: true,
        },
        {
          spotId: 12,
          url: "https://a0.muscache.com/im/pictures/b64c232d-e256-43ac-b3f6-fc7b5d8d096a.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 12,
          url: "https://a0.muscache.com/im/pictures/ee32a639-e324-4da1-9d33-e28790b18dc7.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 12,
          url: "https://a0.muscache.com/im/pictures/8cf51f64-63f4-45a1-8a54-57dfb90bacd5.jpg?im_w=720",
          preview: false,
        },
        {
          spotId: 12,
          url: "https://a0.muscache.com/im/pictures/f6fd1f8d-b876-4a84-bd35-81881164e200.jpg?im_w=720",
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
