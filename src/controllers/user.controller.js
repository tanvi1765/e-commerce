const { userservice} = require("../services");

/** create userservice */
const createuser = async (req, res) => {
  try {
    const reqBody = req.body;
    const userExists = await userservice(reqBody.user_name);
    if (userExists) {
      throw new Error("user already created by this user service!");
    }

    const user = await userservice.createuser(reqBody);

    res.status(200).json({
      success: true,
      message: "user create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({
       success: false,
       message: error.message });
  }
};

/** Get user list */
const getuserList= async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: getuserlist,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
       message: error.message });
  }
};

/** Delete user user */
const deleteuser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userservice.getuserById(userId);
    if (!userExists) {
      throw new Error(" user User not found!");
    }

    await userservice.deleteuser(userId);

    res.status(200).json({
      success: true,
      message: " user User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message });
  }
};

/** Get user details by id */
const getuserDetails = async (req, res) => {
  try {
    const getuserDetails = await userservice.getuserById(req.params.userId
      );
    if (!getDetails) {
      throw new Error("user not found!");
    }

    res.status(200).json({
      success: true,
      message: "User user get successfully!",
      data: getuserDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
   createuser,
   getuserList,
   getuserDetails,
   deleteuser,
};