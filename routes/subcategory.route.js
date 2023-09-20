const express = require("express");
const { subcategoryvalidation } = require("../validations");
const { subcategoryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create subcategory */
router.post(
  "/create-subcategory",
  validate(subcategoryvalidation.createsubcategory),
  subcategoryController.createsubcategory
);

/** Get subcategory list */
router.get(
  "/list",
  // validate(subcategoryvalidation.getsubcategoryList),
  subcategoryController.getsubcategoryList
);

/** Get subcategory details by id */
router.get(
  "/get-details/:subcategoryId",
  // validate(subcategoryvalidation.getDetails),
  subcategoryController.getsubcategoryDetails
);
/** Delete subcategory */
router.delete(
  "/delete-subcategory/:subcategoryId",
  // validate(subcategoryvalidation.getDetails),
  subcategoryController.deletesubcategory
);

module.exports = router;
