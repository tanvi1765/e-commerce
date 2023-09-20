const { categoryservice} = require("../services");

/** create categoryservice */
const createcategory = async (req, res) => {
  try {
    const reqBody = req.body;
    const categoryExists = await categoryservice(reqBody.category_name);
    if (categoryExists) {
      throw new Error("category already created by this category service!");
    }

    const category = await categoryservice.createcategory(reqBody);

    res.status(200).json({
      success: true,
      message: "category create successfully!",
      data: { category },
    });
  } catch (error) {
    res.status(400).json({
       success: false,
       message: error.message });
  }
};

/** Get category list */
const getcategoryList= async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get category list successfully!",
      data: getcategorylist,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
       message: error.message });
  }
};

/** Delete category user */
const deletecategory = async (req, res) => {
  try {
    const userId = req.params.userId;
    const categoryExists = await categoryservice.getuserById(categoryId);
    if (!categoryExists) {
      throw new Error(" category User not found!");
    }

    await categoryservice.deletecategory(categoryId);

    res.status(200).json({
      success: true,
      message: " category User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message });
  }
};

/** Get category details by id */
const getcategoryDetails = async (req, res) => {
  try {
    const getcategoryDetails = await categoryservice.getcategoryById(req.params.categoryId
      );
    if (!getDetails) {
      throw new Error("category not found!");
    }

    res.status(200).json({
      success: true,
      message: "User category get successfully!",
      data: getcategoryDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   createcategory,
   getcategoryList,
   getcategoryDetails,
   deletecategory,
};