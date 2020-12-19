var express = require("express");
var router = express.Router();
var dbInit = require("../database/db_init")

router.get("/", function(req, res, next) {

  var word = dbInit().catch(console.error);

  word.then((word) => {
    res.send({
        "word": word,
    });
  });
});

module.exports = router;
