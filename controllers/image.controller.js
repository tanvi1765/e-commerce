const { imageService } = require("../services");

// create image
const createImage = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        if (req.file) {
            reqBody.product_image = req.file.filename;
        } else {
            throw new Error("image is required");
        }

        const createImage = await imageService.createImage(reqBody);
        res.status(200).json({
            success: true,
            message: "image create successfully!",
            data: (createImage),
        })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// image list
const imageList = async (req, res) => {
    try {
        const getimage = await imageService.imageList();

        res.status(200).json({
            success: true,
            message: "image get successfully",
            data: (getimage)
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update image
const updateImg = async (req, res) => {
    try {
        const imageId = req.params.imageId;

        const imageEx = await imageService.getImageById(imageId);
        if (!imageEx) {
            throw new Error("image not found");
        }
        await imageService.updateImg(imageId, req.body);
        res.status(200).json({
            success: true,
            message: "image detiles update successfully! "
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete recode
const deleteImg = async (req, res) => {
    try {
        const imageId = req.params.imageId;
        const imageEx = await imageService.getImageById(imageId);
        if (!imageEx) {
            throw new Error("image not found");
        }
        await imageService.deleteImg(imageId, req.body);
        res.status(200).json({
            success: true,
            message: "image delete successfully !"
        })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createImage,
    imageList,
    updateImg,
    deleteImg
};