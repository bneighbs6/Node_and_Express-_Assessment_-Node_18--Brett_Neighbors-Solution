const express = require("express");

const app = express();

const validateZip = require("./middleware/validateZip")

const morgan = require("morgan");

// Routes

// Route for /check/:zip
// zip parameter
// const morgan = require("morgan");
app.get("/check/:zip", validateZip, (req, res, next) => {
  getZoos(zip)
    .then((zoos) => {
      if (zoos.length > 1) {
        res.send(`${zip} exists in our records.`)
      } else {
        res.send(`${zip} does not exist in our records.`)
      }
    })
  next();
})

// Route for /zoos/:zip
app.get("/zoos/:zip", validateZip, (req, res, next) => {
  getZoos(zip)
    .then((zoos) => {
      if (zoos.length > 1) {
        res.send(`${zip} zoos: ${zoos}`)
      } else {
        res.send(`${zip} has no zoos.`)
      }
    })
  next();
})

// Route for /zoos/all
// Requires admin query parameter = true;
app.get("/zoos/all?admin=true", (req, res, next) => {
  getZoos()
})


// Route for error handling
app.use((req, res, next) => {
  res.send("That route could not be found!")
})

module.exports = app