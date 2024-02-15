// create server port
const PORT = 5000

// require express app from app.js
const app = require("./app")

// listener function that will run when server is deployed successfully
const listener = () => {
  console.log(`The server is live on Port ${PORT}`)
}


// listen for port and listener function
app.listen(PORT, listener)