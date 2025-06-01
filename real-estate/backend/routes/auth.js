import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { isEmail} from "one-linear-validator";
import User from "../models/user.js";
import { body, validationResult } from "express-validator";

const router = express.Router();
const jwtScecret = "dfkhewoijrikjrosa";
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("lastName", "Enter a valid LastName").isLength({ min: 3 }),
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
      let user;
      if(isEmail(email)){
        console.log(isEmail(email))
        user = await User.findOne({ email });
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
      }
      
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(password, salt);
      user = await User.create({
        name,
        lastName,
        email,
        password: secPassword,
        isAdmin: "false"
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
        admin: false,
        user: { name: user.name, email: user.email, password: user.password,
          lastName: user.lastName
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
      let user 
      if(isEmail(email)){
        console.log(isEmail(email))
        user = await User.findOne({ email });
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
        admin: false,
        user: { name: user.name, email: user.email, password: user.password, 
            lastName: user.lastName,
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

router.post('/adminlogin', [
  body("email", "Please enter a valid email"),
  body("password", "Password is not blank"),
], async (req, res) => {
  let success = false;
  let isError = false;
  const {email, password} = req.body;
  const error = await validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  try {
    let user = await User.findOne({email});
    if(!user){
      isError = true;
      return res.status(400).json({success, isError, errorMsg: "Please try to login with correct credential"})
    }
  
    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare){
      isError = true;
      return res.status(400).json({success, isError, errorMsg: "Please try to login with correct credential"});
    }
  
    if(user.isAdmin !== "true"){
      isError = true;
      return res.status(400).json({success, isError, errorMsg: "You do not have permission to access Admin"})
    }
  
    const data = {
      user: {
        id: user.id,
      },
    };
    success = true;
    const token = jwt.sign(data, jwtScecret);
    return res.status(200).json({
      success,
      token,
      login: false,
      admin: true,
      user: { name: user.name, email: user.email, password: user.password, 
        lastName: user.lastName, userRole: user.isAdmin,
     },
    })
  } catch (error) {
    console.error(error.message);
      isError = true;
      return res
        .status(500)
        .json({isError, errorMsg: "Some internal error occuered" });
  }


})

router.get('/getusers', async (req, res) => {

  try {
    const users = await User.find();
    return res.status(200).json(users)
  } catch (error) {
    console.error(error);
    return res.status(500).json({errorMsg: "Some internal error occured"});
  }

})

router.delete('/deleteuser/:id', async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    console.log('user', deleteUser)
    if(deleteUser){
      res.status(200).json({message: `User ${deleteUser.name} Deleted susseccfully`})
    }
  } catch (error) {
    return res.status(500).json({errorMsg: "Some internal error occured"});
  }
})

export default router;
