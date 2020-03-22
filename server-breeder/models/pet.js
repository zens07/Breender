"use strict";
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define(
    "pet",
    {
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.STRING,
      about: DataTypes.STRING,
      photo: DataTypes.STRING,
      speciesId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {}
  );
  pet.associate = function(models) {
    pet.belongsTo(models.species, {
      foreignkey: "speciesId"
    });
    pet.belongsTo(models.users, {
      foreignkey: "userId"
    });
  };
  return pet;
};
