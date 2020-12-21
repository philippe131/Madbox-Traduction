var express = require("express");
var router = express.Router();
var dbInit = require("../database/db_init");
const translate = require('@vitalets/google-translate-api');

router.get("/", function(req, res) {

  // get random french word
  dbInit().then((word) => {
    translate(word, {to: 'en'}).then(trad => {

      var trans = trad.text;
      res.send({
        "word": word,
        "trad": trans
      });
    }).catch(err => {
        console.error(err)
    });
  });
});

module.exports = router;
