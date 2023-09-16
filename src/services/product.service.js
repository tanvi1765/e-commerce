// const { product } = require("../models");

// /**
//  * Create product
//  * @param {object} reqBody
//  * @returns {Promise<userId>}
//  */
// const createproduct = async (reqBody) => {
//   return product.create(reqBody);
// };

// /**
//  * Get product user list
//  * @param {object} filter
//  * @param {object} options
//  * @returns {Promise<product>}
//  */
// const getproductlist = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

//   return product.find(filter).skip(skip).limit(options.limit).select("-password");
// };

// /**
//  * Get  product user details by id
//  * @param {ObjectId} userId
//  * @returns {Promise<User>}
//  */
// const getproductId = async (userId) => {
//   return product.findById(userId);
// };

// /**
//  * Delete  product user
//  * @param {ObjectId} userId
//  * @returns {Promise<User>}
//  */
// const deleteproduct = async (userId) => {
//   return product.findByIdAndDelete(userId);
// };

// module.exports = {
//   createproduct,
//   getproductlist,
//   getproductId,
//   deleteproduct,
// };
