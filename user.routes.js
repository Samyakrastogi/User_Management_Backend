const express = require("express");
const userService = require("./user.service");
const router = express.Router();
const validateSchema = require("./middleware");
const userValidation = require("./user.validation");

// Base path: http://localhost:4000/users

//Authorised API's
router.post(
  "/insert",
  validateSchema(userValidation.create),
  userService.createUser
); //Create

router.get("/image", userService.getUsers); //Get

router.get("/details/:id", userService.getUserById); //Get By ID

router.put(
  "/update/:id",
  validateSchema(userValidation.create),
  userService.updateUser
); //Update

router.delete("/delete/:id", userService.deleteUser); //Delete

module.exports = router;
