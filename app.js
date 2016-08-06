const express = require('express');
const bootstrap = require('./bootstrap');

const app = express();
bootstrap(app);

module.exports = app;
