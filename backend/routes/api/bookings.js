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

//Get All Current User's Bookings
router.get("/current", requireAuth, async (req, res) => {
    const getAllbookings = await Booking.findAll({
        where: {
            userId: req.user.id,
        },
        attributes: [
            "id",
            "spotId",
            "userId",
            'startDate',
            'endDate',
            "createdAt",
            "updatedAt",
        ],
        include: [
            {
                model: Spot,

                attributes: {
                    exclude: ['description', 'createdAt', 'updatedAt']
                }
            }
        ]

    })

   // console.log("getallbooking",getAllbookings)
    const obj = {};
    obj.Booking = [];

    for (let i = 0; i < getAllbookings.length; i++) {
        const booking = getAllbookings[i].toJSON();

        const findUrl = await SpotImage.findOne({
            where: {
                spotId: booking.spotId,
            },
            attributes:["url"]
        })
        //console.log('url', findUrl.toJSON())
        if (findUrl) {
            url = findUrl.toJSON().url;
        } else {
            url = null
        }
        booking.Spot.previewImage = url
       // console.log("spot", booking.Spot)


        const result = {
            id:booking.id,
            spotId: booking.spotId,
            Spot:booking.Spot,
            userId:booking.userId,
            startDate:booking.startDate,
            endDate:booking.endDate,
            createdAt:booking.createdAt,
            updatedAt:booking.updatedAt
        }
        obj.Booking.push(result);
    }
    res.status(200).json(obj);
  });

//Edit a Booking
const validateBooking = [
    check("startDate")
        .exists({ checkFalsy: true })
        .isAfter()
      .withMessage("startDate must in future"),
    check("endDate")
        .exists({ checkFalsy: true })
        .custom((date, { req }) => {
            return new Date(date) - new Date(req.body.startDate) > 0
        })
        .withMessage("endDate cannot be on or before startDate"),
          handleValidationErrors,
];

router.put("/:bookingId", requireAuth, validateBooking, async (req, res) => {

    const updateBooking = await Booking .findByPk(req.params.bookingId)
    const { startDate, endDate } = req.body

    if (!updateBooking) {
        res.status(404).json({
            "message": "Booking couldn't be found",
      "statusCode": 404
        })
    }
    else if (new Date(endDate) < updateBooking.toJSON().endDate) {
        res.status(403).json({
            "message": "Past bookings can't be modified",
      "statusCode": 403
        })
    }
    else if ((updateBooking.toJSON().startDate <= new Date(endDate) && updateBooking.toJSON().endDate >= new Date(endDate)) || (updateBooking.toJSON().startDate <= new Date(startDate) && updateBooking.toJSON().endDate >= new Date(startDate))) {
        res.status(403).json({
            "message": "Sorry, this spot is already booked for the specified dates",
      "statusCode": 403,
      "errors": {
        "startDate": "Start date conflicts with an existing booking",
        "endDate": "End date conflicts with an existing booking"
      }
        })
    } else {
        if(startDate) updateBooking.set({ startDate: startDate });
        if(endDate) updateBooking.set({ endDate: endDate });
    }
res.status(200).json(updateBooking)
 })

//DELETE a BOOKING
router.delete('/:bookingId', requireAuth, async (req, res) => {
    const findBooking = await Booking.findByPk(req.params.bookingId)
    const{startDate,endDate} = req.body

    if (!findBooking) {
        res.status(404).json({
            "message": "Booking couldn't be found",
            "statusCode": 404

        })
    }
    else if (new Date(startDate) >= findBooking.startDate) {
        res.status(403).json({
            "message": "Bookings that have been started can't be deleted",
            "statusCode": 403
        })
    } else {
        findBooking.destroy()
        res.status(200).json({
            "message": "Successfully deleted",
      "statusCode": 200
        })
    }
})









module.exports = router;
