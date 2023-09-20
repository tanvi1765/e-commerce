const { category } = require("../models");

const createcategory = async (reqBody) => {
  return category.create(reqBody);
};

const getcategorylist = async (req, res) => {
  return category.find();
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
