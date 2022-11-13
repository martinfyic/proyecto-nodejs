const Products = require('../database/Products');

const getAllProducts = async () => {
	const allProducts = await Products.getAllProducts();
	return allProducts;
};

const getProductById = async req => {
	const productById = await Products.getProductById(req);
	return productById;
};

const createNewProduct = async newProduct => {
	const createdProduct = await Products.createNewProduct(newProduct);
	return createdProduct;
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
	createNewProduct,
	upDateOneProduct,
	deleteOneProduct,
};
