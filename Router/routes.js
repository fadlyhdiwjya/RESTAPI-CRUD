const express = require('express');
const routes = express.Router();

// Controller 
const Controller = require('../Controller/controller');



// Routes Create
routes.post('/add-products', Controller.createProducts);


// Routes Read
routes.get('/products', Controller.readProducts);

// Routes FindById
routes.get('/products/:id', Controller.FindById);


module.exports = routes;