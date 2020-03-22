exports.BASE_URL = "http://localhost:5000/api/v1";
// exports.BASE_URL = "https://serverbreednerzens.herokuapp.com/api/v1/";

const token = localStorage.getItem("token");
exports.TOKEN = token;
