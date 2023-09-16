// const { user } = require("../models");

// /**
//  * Create user
//  * @param {object} reqBody
//  * @returns {Promise<user>}
//  */
// const createuser = async (reqBody) => {
//   return user.create(reqBody);
// };

// /**
//  * Get user user list
//  * @param {object} filter
//  * @param {object} options
//  * @returns {Promise<user>}
//  */
// const getuserlist = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

//   return user.find(filter).skip(skip).limit(options.limit).select("-password");
// };

// /**
//  * Get  user user details by id
//  * @param {ObjectId} userId
//  * @returns {Promise<user>}
//  */
// const getuserId = async (userId) => {
//   return user.findById(userId);
// };

// /**
//  * Delete  user
//  * @param {ObjectId} userId
//  * @returns {Promise<user>}
//  */
// const deleteuser = async (userId) => {
//   return user.findByIdAndDelete(userId);
// };

// module.exports = {
//   createuser,
//   getuserlist,
//   getuserId,
//   deleteuser,
// };
