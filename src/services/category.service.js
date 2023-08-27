const { category } = require(".");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<userId>}
 */
const createcategory = async (reqBody) => {
  return category.create(reqBody);
};

/**
 * Get category user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<category>}
 */
const getcategorylist = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return category.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get  category user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const getcategoryId = async (userId) => {
  return category.findById(userId);
};

/**
 * Delete  category user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deletecategory = async (userId) => {
  return category.findByIdAndDelete(userId);
};

module.exports = {
  createcategory,
  getcategorylist,
  getcategoryId,
  deletecategory,
};
