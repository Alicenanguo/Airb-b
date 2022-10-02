const express = require("express");


const { setTokenCookie, requireAuth,restoreUser } = require("../../utils/auth");
const { Spot,User,Review,SpotImage,ReviewImage,Booking,sequelize} = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const user = require("../../db/models/user");
const { parse } = require("pg-protocol");

const router = express.Router();

const validateSpot = [

     check("address")
        .exists({ checkFalsy: true })
        //.notNull()
        .withMessage("Street address is required"),
    check("city")
            .exists({ checkFalsy: true })
            .withMessage("City is required"),
    check("state")
        .exists({ checkFalsy: true })
       // .notNull()
        .withMessage("State is required"),
    check("country")
        .exists({ checkFalsy: true })
       // .notNull()
        .withMessage("Country is required"),
    check("lat")
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage("Latitude is not valid"),
    check("lng")
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage("Longitude is not valid"),
    check("name")
        .exists({ checkFalsy: true })
        .isLength({max:50})
        .withMessage("Name must be less than 50 characters"),
    check("description")
        .exists({ checkFalsy: true })
        //.notNull()
        .withMessage("Description is required"),
    check("price")
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage("Price per day is required"),

    handleValidationErrors,
];

//get spot of current user
router.get('/current', requireAuth, async (req, res) => {
    const findSpot = await Spot.findAll({
        where: {
            ownerId: req.user.id
        }
    })
    //console.log("findSpot",findSpot)
    for (let i = 0; i < findSpot.length; i++){

        const countRating = await Review.findAll({
            where: {
                userId: req.user.id,

            },
            attributes: [
                    [sequelize.fn("AVG", sequelize.col("stars")), 'avgRating'],
                ]
            })

        const getImage = await SpotImage.findOne({
            where: {
                spotId: findSpot[i].dataValues.id
            },
            attributes: ["url"],
        })

        if (getImage) {
            url = getImage.url
        } else {
            url = null
        }
        findSpot[i].dataValues.avgRating = parseFloat(Number(countRating[0].dataValues.avgRating).toFixed(1))

        findSpot[i].dataValues.previewImage = url
    }

    res.status(200).json({ "Spots":findSpot } )
})

//Create a Review for a Spot
const validateReview = [
    check("review")
        .exists({ checkFalsy: true })
        .withMessage("Review text is required"),
   check("stars")
        .exists({ checkFalsy: true })
        .withMessage("Stars must be an integer from 1 to 5"),
        handleValidationErrors,
]


router.post('/:spotId/reviews', requireAuth, validateReview,async (req,res) => {
    const findSpot = await Spot.findByPk(req.params.spotId)
   // console.log("findSpot",findSpot)
    const { review, stars } = req.body
    const userId = req.user.id

    const existReview = await Review.findOne({
        where:
        {
            userId:userId,
           spotId:req.params.spotId,
    }
    })

    if (!findSpot) {
        res.status(404).json({
      "message": "Spot couldn't be found",
      "statusCode": 404
        })
    }
    else if (existReview) {
        res.status(403).json({
            "message": "User already has a review for this spot",
            "statusCode": 403

        })
    }
    else {
        const newReview = await Review.create({
            userId:userId,
            spotId: req.params.spotId,
            review,
            stars
        })
        res.status(201).json(newReview)
    }

})


//Get Reviews by Spot Id
router.get('/:spotId/reviews', async (req, res) => {
    const findSpot = await Spot.findByPk(req.params.spotId)


    if (!findSpot) {
        res.status(404).json({
            "message": "Spot couldn't be found",
            "statusCode": 404

        })
    } else {
        const findReview = await Review.findAll({
            where: {
                spotId: findSpot.id

            },
            attributes: ['id', 'userId', 'spotId', 'review', 'stars', 'createdAt', 'updatedAt'],
            include: [
                {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName']
                },
                {
                    model: ReviewImage,
                    attributes: ["id", "url"],

                }
            ]
        })
        // const obj = {};
        // obj.Reviews = [];

        // for (let i = 0; i < findReview.length; i++) {
        //     const review = findReview[i].toJSON();

        //     const findReviewImg = await ReviewImage.findOne({
        //         where: {
        //             reviewId: review.userId
        //         },
        //     });
        //     //console.log("review",review)
        //     //console.log('findReviewimg',findReviewImg)


        //     review.ReviewImages = findReviewImg
        //     obj.Reviews.push(review);
        // }

        res.status(200).json({ "Reviews": findReview });
    }

})



//create an image to a spot
router.post("/:spotId/images", requireAuth, async (req, res) => {
    const { url, preview } = req.body;

    const findbyId = await Spot.findByPk(req.params.spotId)
    //console.log("findbyId",findbyId)

    if (!findbyId) {
        res.status(404).json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    } else if (req.user.id !== findbyId.ownerId)
        res.status(403).json({
            "message": "Spot need belong to a user",
            "statusCode": 403
        })
    else {
        const createImg = await SpotImage.create({
            url,
            preview,
            spotId:req.params.spotId


        })
        res.status(200).json({
            id: createImg.id,
            url,
            preview
        })
    }
})

//Get All Bookings for a Spot By Id
router.get('/:spotId/bookings', requireAuth, async (req, res) => {
    const findSpot = await Spot.findByPk(req.params.spotId)

    if (!findSpot) {
        res.status(404).json({
            "message": "Spot couldn't be found",
      "statusCode": 404
        })
    }
   else if (findSpot.ownerId !== req.user.id) {


        const notOwnerBooking = await Booking.findAll({
            where: {
                spotId:req.params.spotId
            },
            attributes: [
                'spotId', 'startDate', 'endDate'
            ],

        })

        res.status(200).json({"Bookings":notOwnerBooking})
    }
   else if (findSpot.ownerId === req.user.id) {


        const OwnerBooking = await Booking.findAll({
            where: {
                spotId: req.params.spotId
            },
            include: [
                {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName']
                }
            ],
        })
        res.status(200).json({"Bookings":OwnerBooking})
    }
 })




//Create a Booking Based on a Spot Id
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

  router.post('/:spotId/bookings', requireAuth, validateBooking, async (req, res) => {
      const findSpot = await Spot.findByPk(req.params.spotId)
      const { startDate, endDate } = req.body;
    const bookingDate = await Booking.findAll({
        where: {
            spotId:req.params.spotId
        }
    })
      const arr = [];
    bookingDate.forEach(booking => {
        //console.log("booking",booking)
        // console.log(booking.toJSON().startDate)
        // console.log("start", new Date(startDate))
        // console.log("endDate",new Date(endDate))
        if ((booking.toJSON().startDate <= new Date(endDate) && booking.toJSON().endDate >= new Date(endDate)) || (booking.toJSON().startDate <= new Date(startDate) && booking.toJSON().endDate >= new Date(startDate)) ){
             arr.push("test")
            return res.status(403).json({
                "message": "Sorry, this spot is already booked for the specified dates",
                "statusCode": 403,
                "errors": {
                    "startDate": "Start date conflicts with an existing booking",
                    "endDate": "End date conflicts with an existing booking"
                }
            })
        }
    })
    if (!findSpot) {
        res.status(404).json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }if(!arr.length){
    // else {

        const newBookingdate = await Booking.create({
            spotId: findSpot.id,
            userId: req.user.id,
            startDate: startDate,
            endDate:endDate
        })
        console.log("newbooking",newBookingdate)
        res.status(200).json(newBookingdate)
    }
  })





//get spot from id
router.get('/:spotId', async (req, res) => {

    const findbyId = await Spot.findByPk(req.params.spotId)

   // console.log("findbyId",findbyId)
    if (!findbyId) {
        res.status(404).json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    } else {
        const findReview = await Review.findOne({
            where: {
                spotId:req.params.spotId
            },
            attributes: [
           [sequelize.fn("COUNT", sequelize.col("id")), "numReviews"],
           [sequelize.fn("AVG", sequelize.col("stars")), "avgStarRating"],
            ]
        })
        findbyId.dataValues.numReviews = findReview.dataValues.numReviews;
        findbyId.dataValues.avgStarRating = findReview.dataValues.avgStarRating;
    //console.log("findReview", findReview)
        const find = await Spot.findOne({
            where:{
            id:req.params.spotId
        },
        include: [
            {
                model: SpotImage,
                attributes: [
                    "id","url","preview"
                ]
            },
            {
                model: User, as: "Owner",
                attributes:["id","firstName","lastName"]
            }
        ]
        })
       // console.log("find",find)
        findbyId.dataValues.SpotImages = find.dataValues.SpotImages
        findbyId.dataValues.Owner = find.dataValues.Owner

    res.status(200).json(findbyId)
    }
})

//edit a spot
router.put('/:spotId', requireAuth, validateSpot,async (req, res) => {
    const updateSpot = await Spot.findByPk(req.params.spotId)

    if (!updateSpot) {
        res.status(404).json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
    else if (updateSpot.ownerId !== req.user.id) {
        res.status(403).json({
            "message": "Spot must belong to the current user",
            "statusCode": 403
        })
    } else {
        const { address, city, state, country, lat, lng, name, description, price } = req.body;

        if (address) {
            updateSpot.set({address:address})
        }if (city) {
            updateSpot.set({city:city})
        }if (state) {
            updateSpot.set({state:state})
        }if (country) {
            updateSpot.set({country:country})
        }if (lat) {
            updateSpot.set({lat:lat})
        }if (lng) {
            updateSpot.set({lng:lng})
        }if (name) {
            updateSpot.set({name:name})
        }if (description) {
            updateSpot.set({description:description})
        }if (price) {
            updateSpot.set({price:price})
        }
    }
res.status(200).json(updateSpot)
})










//get all Spots && add page
const validatePage = [
    check("page")
    .optional()
        .isInt({min:1,max:10})
        .withMessage("Page must be greater than or equal to 1"),
    check("size")
     .optional()
        .isInt({min:1,max:20})
        .withMessage("Size must be greater than or equal to 1"),
     check("minLat")
          .optional()
            .isDecimal()
        .withMessage("Minimum latitude is invalid"),
    check("minLat")
        .optional()
         .isDecimal()
        .withMessage("Minimum latitude is invalid"),
    check("minLng")
        .optional()
          .isDecimal()
        .withMessage("Minimum longitude is invalid"),
     check("maxLng")
        .optional()
          .isDecimal()
        .withMessage("Maximum longitude is invalid"),
    check("minPrice")
        .optional()
        .isDecimal({min:0})
        .withMessage("Minimum price must be greater than or equal to"),
    check("maxPrice")
        .optional()
        .isDecimal({min:0})
        .withMessage("Maximum price must be greater than or equal to"),

        handleValidationErrors,
    ]
router.get('/',validatePage,async (req, res) => {


    let { page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;
    if (!page) {
        page = 1
    }
    if(!size) {
        size = 20
    }
    page = parseInt(page),
    size = parseInt(size)

    const pagination = {};
        if (page >= 1 && size >= 1) {
            pagination.limit = size;
            pagination.offset = size * (page - 1);
        }

        const getAllspot = await Spot.findAll({
        ...pagination
    })


    //console.log("getAllspot", getAllspot)
    //console.log(getAllspot.length)

    for (let i = 0; i < getAllspot.length; i++){

        const countRating = await Review.findAll({
            where: {
                spotId: getAllspot[i].dataValues.id,

            },
            attributes: [
                    [sequelize.fn("AVG", sequelize.col("stars")), 'avgRating'],
                ]
            })
            // console.log("countRating",countRating)


            const getImage = await SpotImage.findOne({
                where: {
                    spotId:getAllspot[i].dataValues.id
                },
                attributes: ["url"],
                // raw: true,
                // nest:true

            })
        if (getImage) {
            url = getImage.url
        } else {
            url = null
        }

            //const result = getAllspot[i].toJSON()
            getAllspot[i].dataValues.avgRating = Number(countRating[0].dataValues.avgRating).toFixed(1)
            //console.log("getImage",getImage)
            getAllspot[i].dataValues.previewImage = url


        }


    res.status(200).json({
        "Spots": getAllspot,
        "page": page,
        "size":size
    })
    })



    //create a spot
    router.post("/", requireAuth, validateSpot, async (req, res) => {
        const { address, city, state, country, lat, lng, name, description, price } = req.body

        const createSpot = await Spot.create({
            ownerId: req.user.id,
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price
        })
        res.status(201).json(createSpot)
    })



    //DELETE a SPOT
    router.delete('/:spotId', requireAuth, async (req, res) => {
        const findSpot = await Spot.findByPk(req.params.spotId)


        if (!findSpot) {
            res.status(404).json({
                "message":"Spot couldn't be found",
                "statusCode": 404

            })
        } else {
            findSpot.destroy()
            res.status(200).json({
                "message": "Successfully deleted",
                "statusCode": 200
            })
        }
    })






module.exports = router;
