const { subcategory } = require("../models");

const createsubcategory = async (reqBody) => {
  return subcategory.create(reqBody);
};

const getsubcategorylist = async (req, res) => {
  return images.find();
};

const getsubcategoryId = async (userId) => {
  return subcategory.findById(userId);
};

const deletesubcategory = async (userId) => {
  return subcategory.findByIdAndDelete(userId);
};

module.exports = {
  createsubcategory,
  getsubcategorylist,
  getsubcategoryId,
  deletesubcategory,
};
