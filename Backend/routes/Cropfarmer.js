const express = require("express");
const router = express.Router();
const fetchfarmer = require("../middleware/fetchfarmer");
const fetchupload = require("../middleware/fetchupload");
const { body, validationResult } = require("express-validator");
const CropSchema = require("../Models/CropSchema");

//Route 1: Adding crop as farmer  POST "/api/sell/farmer/addcrop"

router.post(
  "/addcrop",
  [fetchupload.fetchfarmer, fetchupload.upload.single("image")],
  [
    body("cropName", "Enter a valid title").isLength({ min: 2 }),
    body("address", "Address must be atleast 5 characters").isLength({
      min: 5,
    }),
    body("market", "Enter a valid market").isLength({ min: 2 }),
  ],
  async (req, res) => {
    let success = false;
    try {
      const { cropName, address, market, plotno, weight } = req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        success = false;
        return res.status(400).json({ errors: errors.array() });
      }
      const crop = new CropSchema({
        cropName,
        address,
        market,
        plotno,
        weight,
        user: req.user.id,
      });
      if (req.file) {
        crop.image = req.file.path;
        console.log("image received");
      }
      console.log("Crop detail received Successful");
      const savedNote = await crop.save();
      success = true;
      res.json(savedNote);
    } catch (error) {
      success = false;
      console.error(error.message);
      res.status(500).send("Internal Server Error me hu don");
    }
  }
);

//Route 2: Adding crop as farmer  POST "/api/sell/farmer/current"
router.get("/current", fetchfarmer, async (req, res) => {
  try {
    const notes = await CropSchema.find({
      user: req.user.id,
      flag: "false",
      price: { $ne: 0 },
    });
    notes.sort((a, b) => {
      return b.price - a.price;
    });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2: Adding crop as farmer  POST "/api/sell/farmer/forbid"
router.get("/forbid", fetchfarmer, async (req, res) => {
  try {
    const notes = await CropSchema.find({
      user: req.user.id,
      flag: "false",
      price: "0",
    });
    notes.sort((a, b) => {
      return b.price - a.price;
    });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 3: Adding crop as farmer  POST "/api/sell/farmer/dashboard"

router.get("/dashboard", fetchfarmer, async (req, res) => {
  try {
    const crops = await CropSchema.find({ user: req.user.id, flag: "true" });
    res.json(crops);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 4: Adding crop as farmer  POST "/api/sell/farmer/confirm/:id"
//some logic still remaining

router.put("/confirm/:id", fetchfarmer, async (req, res) => {
  try {
    let crop = await CropSchema.findById(req.params.id);
    if (!crop) {
      return res.status(404).send("Not Found");
    }
    if (crop.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    if (crop.flag === true) {
      return res.status(208).json("Your crop is already sell");
    }
    //console.log(crop);
    const newcrop = await CropSchema.findByIdAndUpdate(req.params.id, {
      flag: "true",
    });
    CropSchema.deleteMany({
      user: crop.user,
      cropName: crop.cropName,
      market: crop.market,
      flag: false,
      weight: crop.weight,
      address: crop.address,
    })
      .then(function () {
        console.log("Data deleted"); // Success
      })
      .catch(function (error) {
        console.log(error); // Failure
      });
    //console.log(newcrop);

    res.json("Your sell order is confirmed");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route-5 Delete Crop  Delete "/api/sell/farmer/deletecrop/:id"

router.delete("/deletecrop/:id", fetchfarmer, async (req, res) => {
  let success = true;
  try {
    let crop = await CropSchema.findById(req.params.id);
    if (!crop) {
      success = false;
      return res.status(404).send("Crop Not Found");
    }
    if (crop.user.toString() !== req.user.id) {
      success = false;
      return res.status(401).send("Not Allowed to Delete");
    }
    crop = await CropSchema.findByIdAndDelete(req.params.id);
    success = true;
    res.json({ Success: "Crop has been Deleted Successfully", crop: crop });
    console.log("Crop has been Deleted Successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
//Route-6  EditCrop
router.put("/updatecrop/:id", fetchfarmer, async (req, res) => {
  const { name, address, plotno, weight, market } = req.body;
  try {
    // Create New Note
    const newCrop = {};
    if (name) {
      newCrop.name = name;
    }
    if (address) {
      newCrop.address = address;
    }
    if (plotno) {
      newCrop.plotno = plotno;
    }
    if (weight) {
      newCrop.weight = weight;
    }
    if (market) {
      newCrop.market = market;
    }
    //find the note
    let crop = await CropSchema.findById(req.params.id);
    if (!crop) {
      return res.status(404).send("Not Found");
    }
    if (crop.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    crop = await CropSchema.findByIdAndUpdate(
      req.params.id,
      { $set: newCrop },
      { new: true }
    );
    res.json({ crop });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Error Occured");
  }
});
module.exports = router;
