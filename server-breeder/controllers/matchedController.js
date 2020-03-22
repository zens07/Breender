const models = require("../models");
const Pet = models.pet;
const Match = models.match;
const Species = models.species;
const User = models.users;
const Profile = models.profile;

exports.matching = async (req, res) => {
  try {
    const { pet_id, pet_id_like } = req.body;
    const verifyMatching = await Match.findOne({
      where: {
        petId: pet_id,
        petIdLike: pet_id_like
      }
    });
    if (!verifyMatching) {
      const verifyMatched = await Match.findOne({
        where: {
          petId: pet_id_like,
          petIdLike: pet_id
        }
      });
      if (!verifyMatched) {
        //create Data
        const createData = await Match.create({
          petId: pet_id,
          petIdLike: pet_id_like,
          status: false
        });
        let data = await toDisplay(createData.id);
        res.status(200).send({
          message: "success created",
          status: true,
          data
        });
      }
      if (verifyMatched && verifyMatched.status == false) {
        // update status
        await Match.update(
          {
            status: true
          },
          {
            where: { id: verifyMatched.id }
          }
        );
        let data = await toDisplay(verifyMatched.id);
        res.status(200).send({
          message: "success updated",
          status: true,
          data
        });
      }
      if (verifyMatched && verifyMatched.status == true) {
        //confirm in your pet matched
        try {
          let data = await toDisplay(verifyMatched.id);
          res.status(200).send({
            message: "your pet is suitable",
            status: true,
            data
          });
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      res.send({
        message: "you have liked it",
        status: false
      });
    }
  } catch (error) {
    console.log(error);
  }
};
//displaying data
const toDisplay = idMatch => {
  return new Promise((resolve, reject) => {
    const data = Match.findOne({
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
      where: { id: idMatch }
    });
    if (data) {
      resolve(data);
    } else {
      reject(error);
    }
  });
};
