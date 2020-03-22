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
      "pets",
      [
        {
          name: "jonsnow",
          gender: "Male",
          age: "Little",
          about: "memiliki bulu yang lebat dan bersih",
          photo: "https://breednder69.netlify.com/assets/images-content/1.jpg",
          speciesId: "1",
          userId: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "brenda",
          gender: "Female",
          age: "Adult",
          about: "memiliki bulu yang lebat dan bersih",
          photo: "https://breednder69.netlify.com/assets/images-content/2.jpg",
          speciesId: "2",
          userId: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "sarutobi",
          gender: "Male",
          age: "Adult",
          about: "memiliki bulu yang lebat dan bersih",
          photo: "https://breednder69.netlify.com/assets/images-content/3.jpg",
          speciesId: 2,
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
    return queryInterface.bulkDelete("pets", null, {});
  }
};
