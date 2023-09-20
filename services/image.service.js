const { images } = require("../models");

const createImage = async (reqbody) => {
    return images.create(reqbody);
};

const imageList = async (req, res) => {
    return images.find();
};

const deleteImg = async (imageId) => {
    return images.findByIdDelete(imageId);
};

const updateImg = async (imageId, updateBody) => {
    return images.findByIdUpdate(imageId, { $set: updateBody });
};

const getImageById = async (imageId) => {
    return images.findById(imageId);
}
module.exports = {
    createImage,
    imageList,
    deleteImg,
    updateImg,
    getImageById
};