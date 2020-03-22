const models = require("../models");
const Payment = models.payment;
const User = models.users;
const Profile = models.profile;
//role user only
exports.insert = async (req, res) => {
  try {
    const { noRek, proofOfTransfer, status } = req.body;
    const dataPayment = await Payment.create({
      noRek,
      proofOfTransfer,
      status,
      userId: req.user.userId
    });
    res.send({
      message: "Data Payment Inputted",
      status: true,
      dataPayment
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Bad Request",
      status: false
    });
    res.status(401).send({
      message: "No Authenticated, Login for Authenticated",
      status: false
    });
  }
};

//role admin only
exports.edit = async (req, res) => {
  try {
    tokenUserId = req.user.userId;
    const verifyUser = await User.findOne({
      where: { id: tokenUserId }
    });
    // res.send(verifyUser.role);
    // console.log(verifyUser);
    if (verifyUser.role == "admin") {
      const payment = await Payment.update(
        { status: req.body.status },
        { where: { id: req.params.id } }
      );

      const data = await Payment.findOne({
        include: [
          {
            model: User,
            attributes: {
              exclude: [
                "createdAt",
                "updatedAt",
                "role",
                "profileId",
                "password"
              ]
            },
            include: [
              {
                model: Profile,
                attributes: { exclude: ["createdAt", "updatedAt"] }
              }
            ]
          }
        ]
      });

      // const dataPayment = await Payment.findOne({
      //   where: payment.id,
      //   attributes: { exclude: ["createdAt", "updatedAt", "role"] }
      // });
      // const dataUser = await Profile.findOne({
      //   where: dataPayment.userId,
      //   attributes: { exclude: ["createdAt", "updatedAt", "role", "userId"] }
      // });
      // const data = [
      //   {
      //     payemntId: dataPayment.id,
      //     name: dataUser.name,
      //     address: dataUser.address,
      //     phone: dataUser.phone,
      //     noRek: dataPayment.noRek,
      //     proofOfTransfer: dataPayment.proofOfTransfer,
      //     status: dataPayment.status
      //   }
      // ];
      res.send({
        message: "success editing status payment",
        status: true,
        data
      });
    } else {
      res.status(400).send({
        message: "Not Access for editing payment",
        status: false
      });
    }
  } catch (error) {
    // res.send(error);
    console.log(error);
    res.status(400).send({
      message: "Bad Request",
      status: false
    });
    res.status(401).send({
      message: "No Authenticated, Login for Authenticated",
      status: false
    });
  }
};
