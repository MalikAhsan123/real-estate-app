const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { body, validationResult } = require("express-validator");

const router = express.Router();
const jwtScecret = "dfkhewoijrikjrosa";
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    let isError = false;
    const { name, lastName, email, password } = req.body;
    const error = await validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    try {
      let user = await User.findOne({ email });
      if (user) {
        isError = true;
        return res
          .status(400)
          .json({
            success,
            isError,
            errorMsg: "A user with this email is already exist",
          });
      }
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(password, salt);
      user = await User.create({
        name,
        // lastName,
        email,
        password: secPassword,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      success = true;
      const token = await jwt.sign(data, jwtScecret);
      res.json({
        success,
        token,
        login: false,
        user: { name: user.name, email: user.email, password: user.password,
          // lastName: user.lastName
         },
      });
      
    } catch (error) {
      console.error(error.message);
      isError = true;
      res
        .status(500)
        .json({ isError, errorMsg: "Internal some error occoured" });
    }
  }
);

router.post(
  "/login",
  [
    body("email", "Please enter a valid email"),
    body("password", "Password is not blank"),
  ],
  async (req, res) => {
    let success = false;
    let isError = false;
    const { email, password } = req.body;
    const error = await validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    try {
      let user = await User.findOne({ email });
      if (!user) {
        isError = true;
        return res
          .status(400)
          .json({
            success,
            isError,
            errorMsg: "Please try to login with correct credentials",
          });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        isError = true;
        return res
          .status(400)
          .json({
            success,
            isError,
            errorMsg: "Please try to login with correct credentials",
          });
      }
      success = true;
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = await jwt.sign(data, jwtScecret);
      return res.json({
        success,
        token,
        login: true,
        user: { name: user.name, email: user.email, password: user.password, 
           //  lastName: user.lastName,
         },
            
      });
      
    } catch (error) {
      console.error(error.message);
      isError = true;
      return res
        .status(500)
        .json({ isError, errorMsg: "Some internal error occuered" });
    }
  }
);

module.exports = router;
