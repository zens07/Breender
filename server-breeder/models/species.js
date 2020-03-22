"use strict";
module.exports = (sequelize, DataTypes) => {
  const species = sequelize.define(
    "species",
    {
      name: DataTypes.STRING,
      information: DataTypes.STRING
    },
    {}
  );
  species.associate = function (models) {
    // associations can be defined here
  };
  return species;
};
