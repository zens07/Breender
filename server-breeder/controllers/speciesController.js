const Species = require("../models").species;
const Users = require("../models").users;

exports.index = async (req, res) => {
  try {
    const data = await Species.findAll();
    res.send({
      data
    });
  } catch (error) {
    console.log(error);
  }
};

exports.insert = async (req, res) => {
  try {
    const verifyUser = await Users.findOne({
      where: { id: req.user.userId }
    });

    if (verifyUser.role == "admin") {
      const data = await Species.create({
        name: req.body.name,
        information: req.body.information
      });
      res.send({
        data,
        message: "created new species done",
        status: "true"
      });
    } else if (verifyUser.role == "user") {
      res.status(403).send({
        message: "You are not an admin role",
        status: false
      });
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "No authenticated, login for authenticated",
      status: false
    });
  }
};
