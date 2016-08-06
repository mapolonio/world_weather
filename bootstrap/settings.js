const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

module.exports = function settings (app) {
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  return app;
};
