const express = require('express');
var db_init = require("./database/db_init")
require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 5000;

db_init();

app.listen(PORT, () => {
  console.log(`le server est lancé sur le port : ${PORT}`);
})
