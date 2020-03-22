const express = require("express");
// const Sequelize = require("sequelize");
require("express-group-routes");

const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const port = 5000;
// const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const authController = require("./controllers/authController");
const registerController = require("./controllers/registerController");
const speciesController = require("./controllers/speciesController");
const petController = require("./controllers/petController");
const userController = require("./controllers/userController");
const paymentController = require("./controllers/paymentController");
const matchController = require("./controllers/matchController");
const matchedController = require("./controllers/matchedController");
const { authenticated } = require("./middleware");

app.group("/api/v1", router => {
  //auth router login
  router.post("/auth/login", authController.login);
  //router register
  router.post("/register", registerController.insert);
  //router spesies
  router.get("/index/species", speciesController.index);
  router.post("/create/species", authenticated, speciesController.insert);
  //router pets
  router.get("/index/pet", authenticated, petController.index);
  router.get("/show/pet/:id", authenticated, petController.show);
  router.get("/pet", authenticated, petController.petAuth);
  router.post("/create/pet", authenticated, petController.insert);
  router.patch("/edit/pet/:id", authenticated, petController.edit);
  router.delete("/delete/pet/:id", authenticated, petController.deleted);
  //router user
  router.get("/user", authenticated, userController.privateUser);
  router.get("/show/user/:id", authenticated, userController.show);
  router.patch("/edit/user/:id", authenticated, userController.update);
  router.delete("/delete/user/:id", authenticated, userController.deleted);
  //router payment
  router.patch("/edit/payment/:id", authenticated, paymentController.edit);
  router.post("/create/payment/:id", authenticated, paymentController.insert);
  //router matching
  router.get("/index/match", authenticated, matchController.index);
  router.get("/show/match", authenticated, matchController.show);
  // router.post("/insert/match", authenticated, matchController.insert);
  // router.patch("/edit/match/:id", authenticated, matchController.edit);
  // router.post("/matching", authenticated, matchController.matching);
  router.post("/matched", authenticated, matchedController.matching);
});

app.listen(port, () => {
  console.log(`listen on port ${port} !!!`);
});
