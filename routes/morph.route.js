const express = require("express");
const router = express.Router();

const util = require('util')

async function generateMorph(file1, file2) {

}

router.get("/", async (req, res) => {
  res.status(200).send({ status: "alive" });
});

router.post("/combine"), async (req, res) => {
  var first_image = req.body.first_image;
  var second_image = req.body.second_image;
  console.log("first_image", first_image);
  console.log("second_image", second_image);
  //do sth
  var response;
  response.message = "Successfully";
  //node-readability
  res.status(200).send(response);
}

module.exports = router; 