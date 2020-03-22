const Profile = require("../models").profile;
const User = require("../models").users;

exports.show = async (req, res) => {
  try {
    const data = await User.findOne({
      include: [
        {
          model: Profile,
          attributes: {
            exclude: ["createdAt", "updatedAt"]
          }
        }
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "role", "password", "profileId"]
      },
      where: { id: req.params.id }
    });
    res.send({
      message: "Detail your Account",
      status: true,
      data
    });
  } catch (error) {
    res.send(error);
  }
};
exports.update = async (req, res) => {
  try {
    if (req.user.userId == req.params.id) {
      const { name, address, phone } = req.body;
      const user = await User.findOne({
        where: { id: req.params.id }
      });
      await Profile.update(
        {
          name,
          address,
          phone
        },
        { where: { id: user.profileId } }
      );

      const data = await User.findOne({
        include: [
          {
            model: Profile,
            attributes: {
              exclude: ["createdAt", "updatedAt"]
            }
          }
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt", "role", "password", "profileId"]
        },
        where: { id: req.params.id }
      });
      res.send({
        message: "Data updated success",
        status: true,
        data
      });
    } else {
      res.status(400).send({
        message: "this data not your account",
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

exports.privateUser = async (req, res) => {
  try {
    const data = await User.findOne({
      include: [
        {
          model: Profile,
          attributes: {
            exclude: ["createdAt", "updatedAt"]
          }
        }
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "role", "password", "profileId"]
      },
      where: { id: req.user.userId }
    });
    res.send({
      message: "Detail your Account",
      status: true,
      data
    });
  } catch (error) {
    res.send(error);
  }
};

exports.deleted = async (req, res) => {
  try {
    if (req.user.userId == req.params.id) {
      const user = await User.findOne({
        where: { id: req.params.id }
      });
      await Profile.destroy({
        where: { id: user.profileId }
      });
      await User.destroy({
        where: { id: user.id }
      });
      res.send({
        message: "Data detail user deleted",
        status: true
      });
    } else {
      res.send({
        message: "Data is not your account and not Deleted ",
        status: false
      });
    }
  } catch (error) {
    res.send(error);
  }
};
