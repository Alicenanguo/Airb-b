const express = require("express");

const { setTokenCookie, requireAuth} = require("../../utils/auth");
const { Spot,User,Review,SpotImage,ReviewImage,Booking,sequelize} = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

//Create an Image for a Review
router.post('/:reviewId/images', requireAuth, async (req, res) => {
    const findImg = await Review.findbyPk(req.params.reviewId);
    console.log('findImg',findImg)

    const imgNum = await ReviewImage.findAll({
        where: {
            reviewId:findImg.reviewId
        }
    })

    if (!findImg) {
        res.status(404).json({
            "message": "Review couldn't be found",
            "statusCode": 404
        })
    }
    else if (imgNum.length >= 10) {
        res.status(403).json({
            "message": "Maximum number of images for this resource was reached",
            "statusCode": 403

        })
    } else {
        const { url } = req.body
        const newImg = await ReviewImage.create({
            //reviewId:findImg.id,
            url,
        })
        res.status(200).json({
            //id: newImg.id,
            url,
        })
    }
} )


module.exports = router;
