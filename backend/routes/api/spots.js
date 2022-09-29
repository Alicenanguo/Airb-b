const express = require("express");


const { setTokenCookie, requireAuth,restoreUser } = require("../../utils/auth");
const { Spot,User,Review,SpotImage,ReviewImage,Booking,sequelize} = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const user = require("../../db/models/user");

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
    console.log("findSpot",findSpot)
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

]


router.post('/:spotId/reviews', requireAuth, validateReview,async (req,res) => {
    const findSpot = await Spot.findByPk(req.params.spotId)

    const existReview = await Review.findAll({
        where:
        {
            userId: req.user.id,
            spotId: req.params.spotId
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
        const {userId,spotId,review, stars} = req.body
        const newReview = await Review.create({
            userId: req.user.id,
            spotId: findSpot.id,
            review,
            stars
        })
        res.status(201).json(newReview)
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










//get all Spots
router.get('/',async (req, res) => {


    const getAllspot = await Spot.findAll()


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

            // let aveRating = countRating[0].dataValues.avgRating
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
            getAllspot[i].dataValues.avgRating = parseFloat(Number(countRating[0].dataValues.avgRating).toFixed(1))
            //console.log("getImage",getImage)
            getAllspot[i].dataValues.previewImage = url

            //getAllspot[i].dataValues.previewImage = getImage.url
        }


        res.status(200).json({ "Spots": getAllspot } )
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


module.exports = router;
