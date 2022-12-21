const express = require('express');
const productosTestRoute = express.Router();
const fakerProductsController = require('../../controllers/fakerProductsController');

productosTestRoute.get(
	'/api/v1/productos-test',
	fakerProductsController.renderingFakerProds
);

module.exports = productosTestRoute;
