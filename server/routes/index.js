const express = require('express');
const app_route = require('./app_routes');

const Router = express.Router();

Router.use('/app', app_route);

module.exports = Router;
