const User = require("./user.model");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.user_password, 10);
    const newUser = new User({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_password: hashedPassword,
      user_image: req.body.user_image,
      total_orders: req.body.total_orders,
    });
    console.log("new user :", newUser);
    const createdUser = await newUser.save();
    res.json({ message: "User created successfully", createdUser });
  } catch (err) {
    res
      .status(400)
      .json({ errorMessage: "Bad Request, Unable to Create User", err });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ message: "User Found", users }).status(200);
  } catch (err) {
    res
      .status(400)
      .json({ errorMessage: "Bad Request, Unable to Get Users", err });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json({ message: "User Found", user }).status(200);
    } else {
      res.json({ mesage: "Invalid ID, User Not Found" });
    }
  } catch (err) {
    res
      .status(400)
      .json({ errorMessage: "Bad Request, Unable to Get User By ID", err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully", user });
  } catch (err) {
    res
      .status(400)
      .json({ errorMessage: "Bad Request, Unable to Delete User", err });
  }
};

const updateUser = async (req, res) => {
  try {
    const userData = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!userData) {
      res.json({ error: "User Not Found" });
    }
    res.json({ message: "User Updated Successfully", userData });
  } catch (err) {
    res
      .status(400)
      .json({ errorMessage: "Bad Request, Unable to Update User", err });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
