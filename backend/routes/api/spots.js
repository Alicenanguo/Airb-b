const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Spot,User,} = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateSpot = [
    check("ownerId")
        .exists({ checkFalsy: true })
        .isInt()
        .withMessage("Please provide a valid ownerId."),
    check("address")
    .exists({ checkFalsy: true })
    .notNull()
        .withMessage("Please provide a valid address."),
    check("state")
        .exists({ checkFalsy: true })
        .notNull()
        .withMessage("Please provide a valid state name."),
    check("country")
        .exists({ checkFalsy: true })
        .notNull()
        .withMessage("Please provide a valid country name."),
    check("lat")
        .exists({ checkFalsy: true })
        .notNull()
        .withMessage("Please provide a valid city name."),

]
