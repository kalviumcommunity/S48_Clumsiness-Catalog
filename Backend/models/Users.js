const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  Username: String,
  Password: String,
  Email: String,
  RegistrationDate: String,
  LastLoginDate: String
});

const UsersModel = mongoose.model("users", UsersSchema);
module.exports = UsersModel;
