"use strict";
module.exports = (sequelize, DataTypes) => {
  const match = sequelize.define(
    "match",
    {
      petId: DataTypes.INTEGER,
      petIdLike: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN
    },
    {}
  );
  match.associate = function(models) {
    // associations can be defined here
    match.belongsTo(models.pet, {
      foreignKey: "petId",
      as: "pet"
    });
    match.belongsTo(models.pet, {
      foreignKey: "petIdLike",
      as: "pet_like"
    });
  };
  return match;
};
