require('dotenv').config()
const express = require("express");
const connectToMongo = require("./db");
const farmerRoute = require("./routes/Farmer");
const merchantRoute = require("./routes/Merchant");
const cropRoute =require("./routes/Crops");

connectToMongo();

const app = express();
const port = 8000;

app.use(express.json());
//Available Routes
app.use("/api/farmer", farmerRoute);
app.use("/api/merchant", merchantRoute);
app.use("/api/crop", cropRoute);

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
