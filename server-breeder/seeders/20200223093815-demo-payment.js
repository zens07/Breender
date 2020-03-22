"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "payments",
      [
        {
          noRek: "18013801380",
          proofOfTransfer: "http://buktitransfer.jpg",
          status: "free",
          userId: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          noRek: "972924792479472",
          proofOfTransfer: "http://buktitransfer2.jpg",
          status: "free",
          userId: "3",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("payments", null, {});
  }
};
