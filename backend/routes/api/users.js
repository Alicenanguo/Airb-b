const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  check("firstName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid firstName."),
  check("firstName")
    .not()
    .isEmail()
    .withMessage("firstName cannot be an email."),
  check("lastName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid lastName."),
  check("lastName").not().isEmail().withMessage("lastName cannot be an email."),

  handleValidationErrors,
];

// Sign up
router.post("/", validateSignup, async (req, res) => {
  const {firstName, lastName, email, password, username } = req.body;

  const hasEmail = await User.findAll({
    where: {
      email:email
    }
   })
  const hasUsername = await User.findAll({
    where: {
       username:username
     }
  })
 // console.log("hasemail",hasEmail.length)

  if (hasEmail.length) {
    res.status(403).json(
      {
        "message": "User already exists",
        "statusCode": 403,
        "errors": {
          "email": "User with that email already exists"
        }
      }
      )
    }
    else if (hasUsername.length) {
      res.status(403).json(
        {
          "message": "User already exists",
          "statusCode": 403,
          "errors": {
            "username": "User with that username already exists"
          }
        }
    )
  } else {
    const user = await User.signup({firstName, lastName, email, username, password });

    let istoken = await setTokenCookie(res, user);
      //console.log("user",user)
    user.dataValues.token = istoken

   res.json(
      user.dataValues
    );

  }

});

module.exports = router;
