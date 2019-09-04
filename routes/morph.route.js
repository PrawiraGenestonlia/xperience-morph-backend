const express = require("express");
const router = express.Router();
const formidable = require('formidable');
const util = require('util')
const fs = require('fs');
const spawnMorpher = require('../python/spawnMorpher');

router.get("/", async (req, res) => {
  res.status(200).send({ status: "alive" });
});

router.get("/test", async (req, res) => {

  spawnMorpher().then(() => {
    // res.sendFile(__dirname + '/../output.jpg');
    fs.readFile(
      __dirname + '/../output.jpg', 'base64',
      (err, base64Image) => {
        const dataUrl = `data:image/jpeg;base64,${base64Image}`
        return res.status(200).send(`<img src=${dataUrl}>`);
      }
    );
  });
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