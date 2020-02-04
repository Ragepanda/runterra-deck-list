const express = require('express');
const routes = require("./routes");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const db = require("./models");
const path = require("path");
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
//MAKE SURE TO WHITELIST ONLY OUR OWN WEBSITE AND ALLOW FOR NO OTHER OUTER REQUESTS
//enable cross origin requests for different port numbers
app.use(cors());

//cookies set up for sending encrypted data to front end
app.use(cookieSession({
  maxAge: 24 *60 * 60 * 1000,
  keys: ['stanisadoodoobutthole']
}));

//Middleware for passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware for automatically turning outgoing API calls into JSON format
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