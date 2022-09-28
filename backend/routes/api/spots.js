<<<<<<< HEAD
checkouconst express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Spot,User,} = require("../../db/models");
=======
const express = require("express");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Spot,User,Review,SpotImage,sequelize} = require("../../db/models");
>>>>>>> f28d80721385a00b92ac8e395fccd8d8eaec533e
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateSpot = [
    check("ownerId")
        .exists({ checkFalsy: true })
        .isInt()
        .withMessage("Please provide a valid ownerId."),
    check("address")
<<<<<<< HEAD
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
=======
        .exists({ checkFalsy: true })
       // .notNull()
        .withMessage("Please provide a valid address."),
    check("state")
        .exists({ checkFalsy: true })
       // .notNull()
        .withMessage("Please provide a valid state name."),
    check("country")
        .exists({ checkFalsy: true })
        //.notNull()
        .withMessage("Please provide a valid country name."),
    check("lat")
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage("Please provide a lat between -90 to +90"),
    check("lng")
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage("Please provide a lng between -180 to +180"),
    check("name")
        .exists({ checkFalsy: true })
        //.notNull()
        .withMessage("Please provide a valid name"),
    check("description")
        .exists({ checkFalsy: true })
        //.notNull()
        .withMessage("Please provide valid description"),
    check("price")
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage("The price should not less than 1"),

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
>>>>>>> f28d80721385a00b92ac8e395fccd8d8eaec533e
