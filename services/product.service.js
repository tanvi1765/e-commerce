const { product } = require("../models");

const createproduct = async (reqBody) => {
  return product.create(reqBody);
};

const getproductlist = async (req, res) => {
  return images.find();
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
