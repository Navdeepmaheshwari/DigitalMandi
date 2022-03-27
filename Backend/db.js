require('dotenv').config()
const mongoose = require("mongoose");
const mongoURL =process.env.DBURL;
  
const connectToMongo = () => {
  mongoose.connect(mongoURL, () => {
    console.log("MongoDB Connected Successfully");
  });
};

module.exports = connectToMongo;
