const mongoose = require("mongoose");
const mongoURL =
  "mongodb://localhost:27017/webjan?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
// const mongoURL =
//   "mongodb+srv://jimnight:webjan123@cluster0.asas2.mongodb.net/Farmers";

const connectToMongo = () => {
  mongoose.connect(mongoURL, () => {
    console.log("MongoDB Connected Successfully");
  });
};

module.exports = connectToMongo;
