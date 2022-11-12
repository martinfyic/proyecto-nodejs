const Products = require('../database/Products');

const getAllProducts = () => {
	const allProducts = Products.getAllProducts();
	return allProducts;
};

const getProductById = () => {
	return;
};

const createProduct = () => {
	return;
};

const upDateOneProduct = () => {
	return;
};

const deleteOneProduct = () => {
	return;
};

module.exports = {
	getAllProducts,
	getProductById,
	createProduct,
	upDateOneProduct,
	deleteOneProduct,
};
