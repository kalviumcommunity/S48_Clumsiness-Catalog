const mongoose = require("mongoose");
const Joi = require("joi");

const UsersSchema = new mongoose.Schema({
  Username: {type: String,required: true,minlength: 3,maxlength: 50},
  Password: {type: String,required: true,minlength: 6,maxlength: 255},
  Email: {type: String,required: true,minlength: 5,maxlength: 255,unique: true},
  RegistrationDate: {type: Date,default: Date.now},
  LastLoginDate: {type: Date}
});

const JoiUserSchema = Joi.object({
  Username: Joi.string().required(),
  Password: Joi.string().required(),
  Email: Joi.string().email().required(),
  RegistrationDate: Joi.date(),
  LastLoginDate: Joi.date()
});


const UsersModel = mongoose.model("users", UsersSchema);
module.exports = {
  UsersModel,
  JoiUserSchema
};
