"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    profileId: DataTypes.INTEGER
  });
  users.associate = function(models) {
    users.hasMany(models.pet, {
      foreignkey: "userId"
    });
    users.belongsTo(models.profile, {
      foreignkey: "profileId"
    });
  };
  return users;
};
