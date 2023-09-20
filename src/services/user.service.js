const { user } = require("../models");

const createuser = async (reqBody) => {
  return user.create(reqBody);
};

const getuserlist = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return user.find(filter).skip(skip).limit(options.limit).select("-password");
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
