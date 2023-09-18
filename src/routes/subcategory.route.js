const express = require("express");
const { subsubcategoryValidation } = require("../validations/subsubcategory.validation");
const { subsubcategoryController } = require("../controllers/subsubcategory.controller");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create subsubcategory */
router.post(
  "/create-subsubcategory",
  validate(subsubcategoryValidation.createsubsubcategory),
  subsubcategoryController.createsubsubcategory
);

/** Get subsubcategory list */
router.get(
  "/list",
  // validate(subsubcategoryValidation.getsubsubcategoryList),
  subsubcategoryController.getsubsubcategoryList
);

/** Get subsubcategory details by id */
router.get(
  "/get-details/:subsubcategoryId",
  // validate(subsubcategoryValidation.getDetails),
  subsubcategoryController.getsubsubcategoryDetails
);
/** Delete subsubcategory */
router.delete(
  "/delete-subsubcategory/:subsubcategoryId",
  // validate(subsubcategoryValidation.getDetails),
  subsubcategoryController.deletesubsubcategory
);

module.exports = router;
