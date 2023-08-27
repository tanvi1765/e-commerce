const Joi = require("joi");

/** create user */
const createuser = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    user_add: Joi.string().required().trim(),
    user_req: Joi.string().required().trim(),
  }),
};

/** GEt user list */
const getuserList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get user details by id */
const getDetails = {
  params: Joi.object().keys({
    userId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createuser,
  getDetails,
  getuserList,
};
