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

app.post('/api/images', parser.single("image"), (req, res) => {
  console.log(req.file) // to see what is returned to you
  const image = {};
  image.url = req.file.url;
  image.id = req.file.public_id;
  Image.create(image) // save image information in database
    .then(newImage => res.json(newImage))
    .catch(err => console.log(err));
});

module.exports = router; 