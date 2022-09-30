const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const {
  Spot,
  User,
  Review,
  SpotImage,
  ReviewImage,
  Booking,
  sequelize,
} = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const user = require("../../db/models/user");

const router = express.Router();

//Delete a Review Image
router.delete("/:imageId", requireAuth, async (req, res) => {
  const findReviewimg = await ReviewImage.findByPk(req.params.imageId)

  if (!findReviewimg) {
    res.status(404).json({
      "message": "Review Image couldn't be found",
      "statusCode": 404
    })
  } else {
    findReviewimg.destroy();
    res.status(200).json({
      "message": "Successfully deleted",
      "statusCode": 200
    })

  }
})


module.exports = router;
