var express = require("express");
var router = express.Router();
var dbInit = require("../database/db_init");
const {Translate} = require('@google-cloud/translate').v2;

router.get("/", function(req, res) {

  // get random french word
  dbInit().then((word) => {
    res.send({
      "word": word
    });
  });
});

module.exports = router;
