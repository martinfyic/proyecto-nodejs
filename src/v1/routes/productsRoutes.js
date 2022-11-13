const express = require('express');
const productController = require('../../controllers/productController');

const router = express.Router();

router
	.get('/', productController.getAllProducts)
	.get('/:prodId', productController.getProductById)
	.post('/', productController.createNewProduct)
	.put('/:prodId', productController.upDateOneProduct)
	.delete('/:prodId', productController.deleteOneProduct);

module.exports = router;
