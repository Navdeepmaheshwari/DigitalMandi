const mongoose = require("mongoose");
const { Schema } = mongoose;
const CropSchema = new Schema({
  cropName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
   
  },
  weight: {
    type: Number,
    required: true,
  },
  flag: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    default: "-1",
  },
});
const Crop = mongoose.model("crop", CropSchema,"CropData");

module.exports = Crop;
