const express = require('express');
const payment_route = express();

const bodyParser = require('body-parser');
payment_route.use(bodyParser.json());
payment_route.use(bodyParser.urlencoded({ extended:false }));

const path = require('path');

payment_route.set('view engine','html');
payment_route.set('views',path.join(__dirname, '../views'));

const paymentController = require('./paymentController');

payment_route.get('/', paymentController.renderProductPage);
payment_route.post('/createOrder', paymentController.createOrder);

module.exports = payment_route;