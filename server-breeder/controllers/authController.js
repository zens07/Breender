const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");

const User = models.users;

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const verifyUser = await User.findOne({ where: { email } });
    if (verifyUser) {
      const verifyPassword = bcrypt.compareSync(password, verifyUser.password);
      if (verifyPassword) {
        const token = jwt.sign({ userId: verifyUser.id }, "my-token-key");
        res.send({
          message: "your login successfully",
          status: "success",
          email,
          token
        });
      } else {
        res.status(401).send({ message: "Invalid Password" });
      }
    } else {
      res.status(401).send({ message: "Invalid email" });
    }
  } catch (error) {
    console.log(error);
  }
};
