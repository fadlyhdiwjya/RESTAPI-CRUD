const express = require('express');
const routes = express.Router();

// Controller 
const Controller = require('../Controller/controller');



// Routes Read
routes.post('/add-products', Controller.createProducts);

module.exports = routes;