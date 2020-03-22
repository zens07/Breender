"use strict";
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "payment",
    {
      noRek: DataTypes.STRING,
      proofOfTransfer: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER
    },
    {}
  );
  payment.associate = function(models) {
    // associations can be defined here
    payment.belongsTo(models.users, {
      foreignkey: "userId"
    });
  };
  return payment;
};
