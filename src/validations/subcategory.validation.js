const Joi = require("joi");

/** create subcategory */
const createsubcategory = {
  body: Joi.object().keys({
    subsubcategory_name: Joi.string().required().trim(),
    other_type: Joi.string().required().trim(),
  }),
};

/** GEt subcategory list */
const getsubcategoryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get subcategory details by id */
const getDetails = {
  params: Joi.object().keys({
    subcategoryId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createsubcategory,
  getsubcategoryList,
  getDetails,
};
