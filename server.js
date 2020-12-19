const express = require('express');
var wordRouter = require("./routes/word");
require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 5000;

// use json
app.use(express.json());

// import the routes
app.use('/word', wordRouter);

app.listen(PORT, () => {
  console.log(`le server est lancé sur le port : ${PORT}`);
})
