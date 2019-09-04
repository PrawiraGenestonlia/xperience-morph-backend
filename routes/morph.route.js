const express = require("express");
const router = express.Router();

const util = require('util')

async function generateMorph(file1, file2) {

}

router.get("/", async (req, res) => {
  res.status(200).send({ status: "alive" });
});

router.post("/combine"), async (req, res) => {
  //do sth
  var response;
  var url = req.body.url;
  response.url = url;
  //node-readability
  res.status(200).send(response);
}

module.exports = router; 