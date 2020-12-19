var express = require("express");
var router = express.Router();
const {MongoClient} = require('mongodb');
require('dotenv').config()

async function dbInit() {

  // Uri to the database
  const uri = process.env.URI;
  const client = new MongoClient(uri,
    { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // connect and define collection
    await client.connect();
    const collection = client.db('sample_words').collection('words');
    // Call treatment method
    var res = await treatment(client, collection);
  }
  catch (e) {
      console.error(e);
  }
  finally {
    await client.close();
    return res;
  }
}

// make the treatment and return result
async function treatment(client, collection){
  return await findOneWordRandom(client, collection);
}

// return ramdom entry of
async function randomWordEntry(client, collection) {
  // Get number of doc
  count = await collection.countDocuments();
  // Get a random entry
  var random = Math.floor(Math.random() * count);
  return random;
}

// Return random word
async function findOneWordRandom(client, collection){
  // get randomIndex
  randomIndex = await randomWordEntry(client, collection);
  // use randomIndex as ID to get a random word && return the name
  var result = await collection.findOne({ id: randomIndex });
  return result.name;
}

module.exports = dbInit;
