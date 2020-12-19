var express = require("express");
var router = express.Router();
var dbInit = require("../database/db_init")
const translate = require('@vitalets/google-translate-api');

router.get("/", function(req, res) {
  // get random french word
  dbInit().then((word) => {
    // translate in english
    translate(word, {to: 'en'}).then(trad => {
      // send word and translation
      var translate = trad.text;
      res.send({
          "word": word,
          "translate": translate
        });
      }).catch(err => {
        console.error(err);
    });
  });
});

module.exports = router;
