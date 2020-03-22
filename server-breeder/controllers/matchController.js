const models = require("../models");
// const Sequelize = require("sequelize");
// const op = Sequelize.Op;
const { Op } = require("sequelize");
const Pet = models.pet;
const Match = models.match;
const Species = models.species;
const User = models.users;
const Profile = models.profile;
// const { or } = Sequelize.Op;

exports.index = async (req, res) => {
  try {
    const { pet_id } = req.query;
    const data = await Match.findOne({
      include: [
        {
          model: Pet,
          as: "pet",
          attributes: {
            exclude: ["createdAt", "updatedAt", "speciesId"]
          },
          include: [
            {
              model: Species,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            },
            {
              model: User,
              attributes: {
                exclude: ["createdAt", "updatedAt", "password", "profileId"]
              },
              include: [
                {
                  model: Profile,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  }
                }
              ]
            }
          ]
        },
        {
          model: Pet,
          as: "pet_like",
          attributes: {
            exclude: ["createdAt", "updatedAt", "speciesId"]
          },
          include: [
            {
              model: Species,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            },
            {
              model: User,
              attributes: {
                exclude: ["createdAt", "updatedAt", "password", "profileId"]
              },
              include: [
                {
                  model: Profile,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  }
                }
              ]
            }
          ]
        }
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "petId", "petIdLike"]
      },
      where: {
        [Op.or]: [{ petId: pet_id }, { petIdLike: pet_id }]
      }
    });
    res.send({
      message: "Checked Data Match",
      status: true,
      data
    });
  } catch (error) {
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const { pet_id, pet_id_like } = req.query;
    const data = await Match.findOne({
      include: [
        {
          model: Pet,
          as: "pet",
          attributes: {
            exclude: ["createdAt", "updatedAt", "speciesId"]
          },
          include: [
            {
              model: Species,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            },
            {
              model: User,
              attributes: {
                exclude: ["createdAt", "updatedAt", "password", "profileId"]
              },
              include: [
                {
                  model: Profile,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  }
                }
              ]
            }
          ]
        },
        {
          model: Pet,
          as: "pet_like",
          attributes: {
            exclude: ["createdAt", "updatedAt", "speciesId"]
          },
          include: [
            {
              model: Species,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            },
            {
              model: User,
              attributes: {
                exclude: ["createdAt", "updatedAt", "password", "profileId"]
              },
              include: [
                {
                  model: Profile,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  }
                }
              ]
            }
          ]
        }
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "petId", "petIdLike"]
      },
      where: { petId: pet_id, petIdLike: pet_id_like }
    });
    res.send({
      message: "Checked Data Match",
      status: true,
      data
    });
  } catch (error) {
    console.log(error);
  }
};

exports.insert = async (req, res) => {
  try {
    const { pet_id, pet_id_like } = req.body;
    const data = await Match.create({
      petId: pet_id,
      petIdLike: pet_id_like,
      status: false
    });
    res.send({
      message: "created data successfully",
      status: true,
      data
    });
  } catch (error) {
    console.log(error);
  }
};

exports.edit = async (req, res) => {
  try {
    await Match.update(
      {
        status: true
      },
      {
        where: { id: req.params.id }
      }
    );

    const data = await Match.findOne({
      include: [
        {
          model: Pet,
          as: "pet",
          attributes: {
            exclude: ["createdAt", "updatedAt", "speciesId"]
          },
          include: [
            {
              model: Species,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            },
            {
              model: User,
              attributes: {
                exclude: ["createdAt", "updatedAt", "password", "profileId"]
              },
              include: [
                {
                  model: Profile,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  }
                }
              ]
            }
          ]
        },
        {
          model: Pet,
          as: "pet_like",
          attributes: {
            exclude: ["createdAt", "updatedAt", "speciesId"]
          },
          include: [
            {
              model: Species,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            },
            {
              model: User,
              attributes: {
                exclude: ["createdAt", "updatedAt", "password", "profileId"]
              },
              include: [
                {
                  model: Profile,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"]
                  }
                }
              ]
            }
          ]
        }
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "petId", "petIdLike"]
      },
      where: { id: req.params.id }
    });
    res.status(200).send({
      message: "status update   d true",
      status: true,
      data
    });
  } catch (error) {
    console.log(error);
  }
};

exports.matching = async (req, res) => {
  try {
    const { pet_id, pet_id_like } = req.body;
    // const { or } = Sequelize.OP;
    const verifyMatch = await Match.findOne({
      where: {
        petId: pet_id,
        petIdLike: pet_id_like
      }
    });
    if (!verifyMatch) {
      const verifyMatched = await Match.findOne({
        where: {
          petId: pet_id_like,
          petIdLike: pet_id
          // [Op.or]: [
          //   { petId: pet_id_like, petIdLike: pet_id },
          //   { petId: pet_id, petIdLike: pet_id_like }
          // ]
        }
      });
      if (!verifyMatched) {
        //create
        res.send("create");
      }
      if (verifyMatched && verifyMatched.status == false) {
        // update status
        res.send("update");
      }
      if (verifyMatched && verifyMatched.status == true) {
        //confirm in your pet matched
        res.send("confirm");
      }
      res.send({
        verifyMatch
      });
    } else {
      res.send("you have liked it");
    }
  } catch (error) {
    console.log(error);
  }
};
