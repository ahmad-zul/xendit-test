'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('joi');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const moment = require('moment');
const _ = require('lodash');
let apiRoutes = require("./api-routes");
let mongoose = require('mongoose');

// App
const app = express();

// Constants
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '0.0.0.0';

// Logs request body to stdout.
const logToStdOut = function(body) {
  let { operations } = body;
  let audit = _.omit(body, 'operations');
  
  _.each(operations, (op) => {
    let auditEntry = {...audit, ...op}
    console.log(JSON.stringify(auditEntry));
  })
}

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

// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);

module.exports = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});