const multer = require("multer");
const fs = require("fs");
const path = require("path");

// img uplode
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname == "product_image") {
            fs.mkdirSync(path.join(__dirname, "../public/product_image"), {
                recursive: true,
            });
            cb(null, path.join(__dirname, "../public/product_image"));
        }
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
            cb("only .png,.jpg and .jpeg format are allowed!");
        }
        cb(null, new Date().getTime() + ext);
    },
});

const upload = multer({
    storage: storage,
});

module.exports = { upload };