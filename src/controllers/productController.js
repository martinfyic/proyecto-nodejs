const productService = require('../services/productService');

const getAllProducts = (req, res) => {
	const allProducts = productService.getAllProducts();
	res.send({ status: 'ok', data: allProducts });
};

const getProductById = (req, res) => {
	const productById = productService.getProductById();
	res.send('Get one Product');
};

const createProduct = (req, res) => {
	const createdProduct = productService.createProduct();
	res.send('Create one Product');
};

const upDateOneProduct = (req, res) => {
	const updatedProduct = productService.upDateOneProduct();
	res.send('Update one product');
};

const deleteOneProduct = (req, res) => {
	const deletedProduct = productService.deleteOneProduct();
	res.send('Delete a product');
};

module.exports = {
	getAllProducts,
	getProductById,
	createProduct,
	upDateOneProduct,
	deleteOneProduct,
};
