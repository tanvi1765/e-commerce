const { subcategoryservice} = require("../services");

/** create subcategoryservice */
const createsubcategory = async (req, res) => {
  try {
    const reqBody = req.body;
    const subcategoryExists = await subcategoryservice(reqBody.subcategory_name);
    if (subcategoryExists) {
      throw new Error("subcategory already created by this subcategory service!");
    }

    const subcategory = await subcategoryservice.createsubcategory(reqBody);

    res.status(200).json({
      success: true,
      message: "subcategory create successfully!",
      data: { subcategory },
    });
  } catch (error) {
    res.status(400).json({
       success: false,
       message: error.message });
  }
};

/** Get subcategory list */
const getsubcategoryList= async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get subcategory list successfully!",
      data: getsubcategorylist,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
       message: error.message });
  }
};

/** Delete subcategory user */
const deletesubcategory = async (req, res) => {
  try {
    const userId = req.params.userId;
    const subcategoryExists = await subcategoryservice.getuserById(subcategoryId);
    if (!subcategoryExists) {
      throw new Error(" subcategory User not found!");
    }

    await subcategoryservice.deletesubcategory(subcategoryId);

    res.status(200).json({
      success: true,
      message: " subcategory User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message });
  }
};

/** Get subcategory details by id */
const getsubcategoryDetails = async (req, res) => {
  try {
    const getsubcategoryDetails = await subcategoryservice.getsubcategoryById(req.params.subcategoryId
      );
    if (!getDetails) {
      throw new Error("subcategory not found!");
    }

    res.status(200).json({
      success: true,
      message: "User subcategory get successfully!",
      data: getsubcategoryDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   createsubcategory,
   getsubcategoryList,
   getsubcategoryDetails,
   deletesubcategory,
};