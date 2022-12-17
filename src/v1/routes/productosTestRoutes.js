const express = require('express');
const productosTestRoute = express.Router();
const fakerProductsController = require('../../controllers/fakerProductsController');

productosTestRoute.get(
	'/v1/api/productos-test',
	fakerProductsController.renderingFakerProds
);

module.exports = productosTestRoute;
