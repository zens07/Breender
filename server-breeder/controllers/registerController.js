// const AuthController = require('./authController')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.users;
const Profile = models.profile;
const Pet = models.pet;
const Species = models.species;

exports.insert = async (req, res) => {
  //req.body for Tabel User, Profile, Pet
  try {
    const { email, password, name_user, phone, address } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    const { name_pet, gender, age, photo, about, species_id } = req.body.pet;

    const verifyUser = await User.findOne({ where: { email } });
    if (!verifyUser) {
      const verifySpecies = await Species.findOne({
        where: { id: species_id }
      });
      if (verifySpecies) {
        const profile = await Profile.create({
          name: name_user,
          phone: phone,
          address: address
        });
        const user = await User.create({
          email,
          password: hash,
          role: "user",
          profileId: profile.id
        });
        // console.log(profile)
        await Pet.create({
          name: name_pet,
          gender: gender,
          age: age,
          photo,
          about,
          speciesId: species_id,
          userId: user.id
        });
        const token = jwt.sign({ userId: user.id }, "my-token-key");
        res.send({
          message: "succesfully for inputed data",
          status: "success",
          email,
          token
        });
      } else {
        res.status(400).send({ message: "Bad request" });
      }
    } else {
      res.status(403).send({
        message: "Email already exists.",
        status: "failed"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "Bad request" });
  }
};
