const { subcategory } = require("../models");

const createsubcategory = async (reqBody) => {
  return subcategory.create(reqBody);
};

const getsubcategorylist = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return subcategory.find(filter).skip(skip).limit(options.limit).select("-password");
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
