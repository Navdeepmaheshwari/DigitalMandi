const express = require("express");
const router = express.Router();
const fetchmerchant = require("../middleware/fetchmerchant");
const { body, validationResult } = require("express-validator");
const CropSchema = require("../Models/CropSchema");

//Route 1: Adding crop as farmer  POST "/api/buy/merchant/list"

router.get(
  "/list",
  fetchmerchant,
  [body("market", "Please select the market").isLength({ min: 1 })],
  async (req, res) => {
    try {
      const { market } = req.body;
      const crops = await CropSchema.find({
        market: market,
        flag: "false",
        price: 0,
      });
      res.json(crops);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
//Route 2: Bid for the crop POST "/api/buy/merchant/list/:id"

router.post(
  "/list/:id",
  fetchmerchant,
  [body("price", "Please enter the bid").isLength({ min: 1 })],
  async (req, res) => {
    try {
      const { price } = req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const oldcrop = await CropSchema.findById(req.params.id);
      if (!oldcrop) {
        return res.status(404).send("Not Found");
      }
      const check = await CropSchema.find({
        user: oldcrop.user,
        cropName: oldcrop.cropName,
        merchant: req.user.id,
      });
      //console.log(check);
      if (check.length != 0) {
        return res
          .status(208)
          .json(
            "You have a already bid For This crop You can increase your bid from current section"
          );
      }
      const { cropName, address, market, weight, user } = oldcrop;
      // console.log(crop);
      console.log(req.user.id);
      const crop = new CropSchema({
        cropName,
        address,
        market,
        weight,
        user,
        price: price,
        merchant: req.user.id,
      });
      console.log("Crop price and merchant added");

      const savedcrop = await crop.save();

      res.json(savedcrop);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route 3: Adding crop as farmer  get "/api/buy/merchant/current"
//Some logic remaining.
router.get("/current", fetchmerchant, async (req, res) => {
  try {
    const crops = await CropSchema.find({
      merchant: req.user.id,
      flag: "false",
    });
    res.json(crops);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 4: Adding crop as farmer  POST "/api/buy/merchant/dashboard"

router.get("/dashboard", fetchmerchant, async (req, res) => {
  try {
    const crops = await CropSchema.find({
      merchant: req.user.id,
      flag: "true",
    });
    res.json(crops);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


//Route 4: Bid with higher price POST "/api/buy/merchant/highbid/:id"


router.put('/highbid/:id',fetchmerchant, async(req,res) =>{
    try {
        let crop = await CropSchema.findById(req.params.id);
        const {price}= req.body;
        if (!crop) { return res.status(404).send("Not Found") }
        if (crop.merchant.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        if(price<=crop.price){
            return res.status(208).json("You have already higher bid than current bid for this crop")
        }
       /*  if(crop.flag === true){
            return res.status(208).json("Your crop is already sell");

        } */
        //console.log(crop);
        const newcrop= await CropSchema.findByIdAndUpdate(req.params.id,{price:price});
       
        res.json("Your Bid order is received");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

module.exports = router;
