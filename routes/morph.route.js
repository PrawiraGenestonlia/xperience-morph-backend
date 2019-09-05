const express = require("express");
const router = express.Router();
const formidable = require('formidable');
const util = require('util')
const fs = require('fs');
var multer = require('multer');
const spawnMorpher = require('../python/spawnMorpher');

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname);
  }
});

var upload = multer({ storage: storage }).array('userPhoto', 2);

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

router.post("/testpost", async (req, res) => {
  res.status(200).send({ "text-received": req.body });
});

router.post("/combine", async (req, res) => {
  upload(req, res, function (err) {
    console.log(req.body);
    console.log(req.files);
    if (err) {
      return res.end("Error uploading file.");
    }
    res.status(200).send({ images: "uploaded" });
  });
  //node-readability
  // res.status(200).send({ images: "sent" });
});

router.post("/combinecontent", async (req, res) => {
  var image1_content = req.body.image1;
  var image2_content = req.body.image2;
  var image1_content_64 = image1_content.replace(/^data:image\/png;base64,/, "");
  var image2_content_64 = image2_content.replace(/^data:image\/png;base64,/, "");
  fs.writeFile("python/test1.jpg", image1_content_64, 'base64', function (err) {
    console.log(err);
  });
  fs.writeFile("python/test2.jpg", image2_content_64, 'base64', function (err) {
    console.log(err);
  });
  spawnMorpher().then(() => {
    fs.readFile(
      __dirname + '/../output.jpg', 'base64',
      (err, base64Image) => {
        const dataUrl = `data:image/jpeg;base64,${base64Image}`
        return res.status(200).send(dataUrl);
      }
    );
  }).catch(err => { console.log(err) });
});

module.exports = router; 