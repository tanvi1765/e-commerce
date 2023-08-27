const express = require("express");
// const { userValidation } = require("../validations/user.validation");
const { userController } = require("../controllers/user.controller");
// const validate = require("../../middlewares/validate");

const router = express.Router();

/** create user */
router.post(
  "/create-user",
  // validate(userValidation.createuser),
  userController.createuser
);

/** Get user list */
router.get(
  "/list",
  // validate(userValidation.getuserList),
  userController.getuserList
);

/** Get user details by id */
router.get(
  "/get-details/:userId",
  // validate(userValidation.getDetails),
  userController.getuserDetails
);
/** Delete user */
router.delete(
  "/delete-user/:userId",
  // validate(userValidation.getDetails),
  userController.deleteuser
);

module.exports = router;