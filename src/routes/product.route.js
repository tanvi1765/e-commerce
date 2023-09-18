const express = require("express");
const { productValidation } = require("../validations/product.validation");
const { productController } = require("../controllers/product.controller");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create product */
router.post(
  "/create-product",
  validate(productValidation.createproduct),
  productController.createproduct
);

/** Get product list */
router.get(
  "/list",
  // validate(productValidation.getproductList),
  productController.getproductList
);

/** Get product details by id */
router.get(
  "/get-details/:productId",
  // validate(productValidation.getDetails),
  productController.getproductDetails
);
/** Delete product */
router.delete(
  "/delete-product/:productId",
  // validate(productValidation.getDetails),
  productController.deleteproduct
);

module.exports = router;
