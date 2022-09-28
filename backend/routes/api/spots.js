const express = require("express");


const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Spot,User,Review,SpotImage,sequelize} = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

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
        //.notNull()
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



//get spot from id
router.get('/:spotId', async (req, res) => {
    const findbyId = await Spot.findByPk(req.params.spotId, {
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
    res.json(findbyId)
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







//get all Spots
router.get('/',async (req, res) => {


    const getAllspot = await Spot.findAll()

    console.log("getAllspot", getAllspot)
    //console.log(getAllspot.length)

    for (let i = 0; i < getAllspot.length; i++){

        const countRating = await Review.findAll({
                where: {
                    spotId:getAllspot[i].dataValues.id
                },
                attributes: [
                    [sequelize.fn("AVG", sequelize.col("stars")), 'avgRating'],
                ]
        })
       // console.log("countRating",countRating)

       // let aveRating = countRating[0].dataValues.avgRating
        const getImage = await SpotImage.findAll({
                where: {
                    spotId:getAllspot[i].dataValues.id
                },
                attributes: ["url"]

        })
        getAllspot[i].dataValues.avgRating = parseFloat(Number(countRating[0].dataValues.avgRating).toFixed(1))
        getAllspot[i].dataValues.previewImage = getImage[0].url
    }


    res.json({ "Spots": getAllspot } )
    })




module.exports = router;
