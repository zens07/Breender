const bcrypt = require("bcrypt");
("use strict");
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
      "users",
      [
        {
          email: "nurzaenimuhammad@gmail.com",
          password: bcrypt.hashSync("12345", 10),
          role: "admin",
          profileId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "risarisnawati@gmail.com",
          password: bcrypt.hashSync("12345", 10),
          role: "user",
          profileId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "entissutisna@gmail.com",
          password: bcrypt.hashSync("54321", 10),
          role: "user",
          profileId: 3,
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
    return queryInterface.bulkDelete("users", null, {});
  }
};
