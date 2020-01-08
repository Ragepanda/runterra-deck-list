const express = require('express');
const routes = require("./routes");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const db = require("./models");
const path = require("path");
const cors = require('cors');
//MAKE SURE TO WHITELIST ONLY OUR OWN WEBSITE AND ALLOW FOR NO OTHER OUTER REQUESTS
//enable cross origin requests for different port numbers
app.use(cors());

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.use(routes);

db.sequelize.sync().then(function () {
  app.listen(port, () => console.log(`Listening on port ${port}`));
});