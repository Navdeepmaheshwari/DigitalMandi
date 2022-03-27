const mongoose = require("mongoose");
const { Schema } = mongoose;
const CropSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Farmer",
  },
  cropName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  market: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  merchant: {
    type: mongoose.Schema.Types.ObjectId,
    default: "6240ba01d8b28a93639ac403",
    ref: "Merchant",
  },
  flag: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    default: "0",
  },
});
const Crop = mongoose.model("crop", CropSchema, "CropData");

module.exports = Crop;
