const { product } = require("../models");

const createproduct = async (reqBody) => {
  return product.create(reqBody);
};

const getproductlist = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return product.find(filter).skip(skip).limit(options.limit).select("-password");
};

const getproductId = async (userId) => {
  return product.findById(userId);
};

const deleteproduct = async (userId) => {
  return product.findByIdAndDelete(userId);
};

module.exports = {
  createproduct,
  getproductlist,
  getproductId,
  deleteproduct,
};
