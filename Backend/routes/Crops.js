const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const CropSchema = require('../models/CropSchema');

//Route 1: Adding crop as farmer  POST "/api/crop/farmer/addcrop"

router.post('/farmer/addcrop', fetchuser, [
    body('cropName', 'Enter a valid title').isLength({ min: 2 }),
    body('address', 'Address must be atleast 5 characters').isLength({ min: 5 }),
    body('market', 'Enter a valid market').isLength({ min: 2 }),
    body('weight', 'Enter a valid weight').isLength({ min: 1 }),], async (req, res) => {
        try {
            const { cropName, address, market, weight } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const crop = new CropSchema({
                cropName, address, market, weight, user: req.user.id
            })
            console.log("Crop detail recieved Successful");
            const savedNote = await crop.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

    module.exports = router