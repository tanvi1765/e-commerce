const express = require("express");
// const { categoryValidation } = require("../validations/category.validation");
const { categoryController } = require("../controllers/category.controller");
// const validate = require("../../middlewares/validate");

const router = express.Router();

/** create category */
router.post(
  "/create-category",
  // validate(categoryValidation.createcategory),
  categoryController.createcategory
);

/** Get category list */
router.get(
  "/list",
  // validate(categoryValidation.getcategoryList),
  categoryController.getcategoryList
);

/** Get category details by id */
router.get(
  "/get-details/:categoryId",
  // validate(categoryValidation.getDetails),
  categoryController.getcategoryDetails
);
/** Delete category */
router.delete(
  "/delete-category/:categoryId",
  // validate(categoryValidation.getDetails),
  categoryController.deletecategory
);

module.exports = router;
