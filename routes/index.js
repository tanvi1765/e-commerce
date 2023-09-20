const express = require("express");
const router = express.Router();

const categoryRoute = require("./category.route");
router.use("/category", categoryRoute);

const imageRoute = require("./image.route");
router.use("/image", imageRoute);

const productRoute = require("./product.route");
router.use("/product", productRoute);

const subcategoryRoute = require("./subcategory.route");
router.use("/subcategory",subcategoryRoute);

const tokenRoute = require("./token.route");
router.use("/token",tokenRoute);

const userRoute = require("./user.route");
router.use("/user", userRoute);



module.exports = router;
