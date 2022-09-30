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

//Create an Image for a Review
router.post("/:reviewId/images", requireAuth, async (req, res) => {
  const findImg = await Review.findByPk(req.params.reviewId);
  console.log("findImg", findImg);

  const imgNum = await ReviewImage.findAll({
    where: {
      reviewId: req.params.reviewId,
    },
  });

  if (!findImg) {
    res.status(404).json({
      message: "Review couldn't be found",
      statusCode: 404,
    });
  } else if (imgNum.length >= 10) {
    res.status(403).json({
      message: "Maximum number of images for this resource was reached",
      statusCode: 403,
    });
  } else {
    const { url } = req.body;
    const newImg = await ReviewImage.create({
      reviewId: req.user.id,

      url,
    });
    console.log("newImg", newImg);

    res.status(200).json({
      id: newImg.dataValues.id,
      url,
    });
  }
});

//edit a review
const validateReview = [
  check("review")
    .exists({ checkFalsy: true })
    .withMessage("Review text is required"),
  check("stars")
    .exists({ checkFalsy: true })
        .withMessage("Stars must be an integer from 1 to 5"),
        handleValidationErrors,
];
router.put("/:reviewId", requireAuth, validateReview, async (req, res) => {
  const updateReview = await Review.findByPk(req.params.reviewId);

  if (!updateReview) {
      res.status(200).json({
          message: "Review couldn't be found",
          statusCode: 404,
        });
    } else {
      const { review, stars } = req.body;
      updateReview.set({
          review: review,
          stars:stars

    })
  }
    res.status(200).json(updateReview)
});

//Get Reviews of Current User
router.get("/current", requireAuth, async (req, res) => {
  const getAllreviews = await Review.findAll({
    where: {
      userId: req.user.id,
    },
    attributes: [
      "id",
      "userId",
      "spotId",
      "review",
      "stars",
      "createdAt",
      "updatedAt",
    ],
    include: [
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: Spot,
        attributes: {
          exclude: ["description", "createdAt", "updatedAt"],
        },
      },
      {
        model: ReviewImage,
        attributes: ["id", "url"],
      },
    ],
  });
  //console.log("getAllreviews",getAllreviews)
  // console.log(req.user.id)
  const obj = {};
  obj.Reviews = [];

  for (let i = 0; i < getAllreviews.length; i++) {
    const review = getAllreviews[i].toJSON();
    const findUrl = await SpotImage.findOne({
      where: {
        spotId: review.spotId,
      },
    });
    //console.log("findUrl", findUrl.toJSON().url)
    // console.log("spot",review.Spot)
    review.Spot.previewImage = findUrl.toJSON().url;
    obj.Reviews.push(review);
  }
  res.status(200).json(obj);
});

module.exports = router;
