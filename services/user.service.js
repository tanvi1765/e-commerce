const { user } = require("../models");

const createuser = async (reqBody) => {
  return user.create(reqBody);
};

const getuserlist = async (req, res) => {
  return images.find();
};

const getuserId = async (userId) => {
  return user.findById(userId);
};

const deleteuser = async (userId) => {
  return user.findByIdAndDelete(userId);
};

module.exports = {
  createuser,
  getuserlist,
  getuserId,
  deleteuser,
};
