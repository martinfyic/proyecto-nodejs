const express = require('express');
const productController = require('../../controllers/productController');

const router = express.Router();

router.get('/', productController.getAllProducts);

router.get('/:prodId', productController.getProductById);

router.post('/', productController.createProduct);

router.put('/:prodId', productController.upDateOneProduct);

router.delete('/:prodId', productController.deleteOneProduct);

module.exports = router;
