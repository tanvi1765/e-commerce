const { category } = require("../models");

const createcategory = async (reqBody) => {
  return category.create(reqBody);
};

const getcategorylist = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return category.find(filter).skip(skip).limit(options.limit).select("-password");
};

const getcategoryId = async (userId) => {
  return category.findById(userId);
};

const deletecategory = async (userId) => {
  return category.findByIdAndDelete(userId);
};

module.exports = {
  createcategory,
  getcategorylist,
  getcategoryId,
  deletecategory,
};
