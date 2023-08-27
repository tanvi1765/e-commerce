const { productservice} = require("../services");

/** create productservice user*/
const createproduct = async (req, res) => {
  try {
    const reqBody = req.body;
    const productExists = await productservice(reqBody.email);
    if (productExists) {
      throw new Error("User already created by this product service!");
    }

    res.status(200).json({
      success: true,
      message: "product create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get product list */
const getproductlist = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get product list successfully!",
      data: 'product',
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get product details by id */
const getproductDetails = async (req, res) => {
  try {
    const getproductDetails = await productservice.getproductById(req.params.userId);
    if (!getDetails) {
      throw new Error("product not found!");
    }

    res.status(200).json({
      success: true,
      message: "User product get successfully!",
      data: getproductDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** Delete product user */
const deleteproduct = async (req, res) => {
  try {
    const userId = req.params.userId;
    const productExists = await productservice.getuserById(userId);
    if (!productExists) {
      throw new Error(" product User not found!");
    }

    await productservice.deleteproduct(userId);

    res.status(200).json({
      success: true,
      message: " product User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   createproduct,
   getproductlist,
   getproductDetails,
   deleteproduct,
};