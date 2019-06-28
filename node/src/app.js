'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
let apiRoutes = require("./api-routes");
let mongoose = require('mongoose');

// App
const app = express();

// Constants
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '0.0.0.0';

// Middlewares
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(morgan('combined'))

mongoose.connect('mongodb://mongodb/resthub');
var db = mongoose.connection;

app.use('/', apiRoutes)

app.use('*', (req, res) => {
  let noResourceError = { code: 404, message: 'No resource found for this URL' }
  res.status(noResourceError.code);
  res.json({
    code: noResourceError.code,
    message: noResourceError.message
  })
  console.error(JSON.stringify(noResourceError));
})

module.exports = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});