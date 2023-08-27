const express = require("express");
const router = express.Router();

const userRoute = require("./user.route");
router.use("/user", userRoute);

const categoryRoute = require("./category.route");
router.use("/category", categoryRoute);

const productRoute = require("./product.route");
router.use("/product", productRoute);

module.exports = router;
