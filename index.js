const config = require("config");
// const mongoose = require("mongoose");

//
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
//routes
const morphRoute = require("./routes/morph.route");

//use config module to get the privatekey, if no private key set, end the application
if (!config.get("myprivatekey")) {
  console.error("FATAL ERROR: myprivatekey is not defined.");
  process.exit(1);
}

//connect to mongodb
// mongoose
//   .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
//   .then(() => console.log("Connected to MongoDB..."))
//   .catch(err => console.error("Could not connect to MongoDB..."));

app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());

app.use("/status", (req, res) => {
  res.json({ status: "alive" });
})
//use users route for api/users
app.use('/api/morph', morphRoute);

// print health
// setInterval(() => { console.log(Date()) }, 1000);

const port = process.env.PORT || 3810;
app.listen(port || 3810, () => {
  console.log(`Listening on port ${port}...`)
});
