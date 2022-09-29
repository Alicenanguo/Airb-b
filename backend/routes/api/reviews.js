const express = require("express");

const { setTokenCookie, requireAuth} = require("../../utils/auth");
const { Spot,User,Review,SpotImage,ReviewImage,Booking,sequelize} = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

