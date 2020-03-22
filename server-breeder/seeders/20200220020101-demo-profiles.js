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
      "profiles",
      [
        {
          name: "Muhammad Nur Zaeni",
          address: "kadipaten",
          phone: "081772891204",
          // userId: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Risa Risnawati",
          address: "jatiwangi",
          phone: "08289828928",
          // userId: '2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sule Sutisna",
          address: "jatiwangi",
          phone: "081082321081",
          // userId: '2',
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
    return queryInterface.bulkDelete("profiles", null, {});
  }
};
