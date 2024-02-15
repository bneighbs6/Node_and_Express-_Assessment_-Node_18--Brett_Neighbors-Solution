const express = require("express");

const app = express();

const validateZip = require("./middleware/validateZip")

const morgan = require("morgan");

// Routes

// Route for /check/:zip
// zip parameter
// const morgan = require("morgan");
app.get("/check/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;
  const zoos = getZoos(zip)
  zoos ? res.send(`${zip} exists in our records`) : res.send(`${zip} does not exist in our records.`)
})

// Route for /zoos/:zip
app.get("/zoos/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;
  const zoos = getZoos(zip);
  if (zoos.length) {
    res.send(`${zip} zoos: ${zoos.join("; ")}`)
  } else {
    res.send(`${zip} has no zoos.`)
  }
})

// Route for /zoos/all
// Requires admin query parameter = true;
app.get("/zoos/all", (req, res, next) => {
  const admin = req.query.admin === "true";
  if (!admin) {
    return res.send("You do not have access to that route")
  }
  zoos = getZoos();
  res.send(`All zoos: ${zoos.join("; ")}`);
})


// Route for handling undefined routes
app.use((req, res, next) => {
  res.send("That route could not be found!")
})

// Route for error handling
app.use((error, req, res, next) => {
  res.send(error);
})

module.exports = app