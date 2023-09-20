const express = require("express");
const { upload } = require("../middlewares/uplode");
const { imagecontroller } = require("../controllers");
const { imagevalidation } = require("../validations");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/crate-image",
    upload.single("product_image"),
    validate(imagevalidation.createImage),
    imagecontroller.createImage
);

// list
router.get(
    "/list",
    imagecontroller.imageList
);

// delete
router.delete(
    "/delete-img/:imageId",
    imagecontroller.deleteImg
);

// update
router.put(
    "/update-img",
    imagecontroller.updateImg
);

module.exports = router;