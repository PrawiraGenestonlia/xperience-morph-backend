const express = require("express");
const router = express.Router();
const formidable = require('formidable');
const util = require('util')

async function generateMorph(file1, file2) {

}

router.get("/", async (req, res) => {
  res.status(200).send({ status: "alive" });
});

router.post("/combine"), async (req, res) => {
  new formidable.IncomingForm().parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error', err)
      throw err
    }
    console.log('Fields', fields)
    console.log('Files', files)
    files.map(file => {
      console.log(file)
    })
  })
  //do sth
  var response;
  response.message = "Successfully";
  //node-readability
  res.status(200).send(response);
}

module.exports = router; 