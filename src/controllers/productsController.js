const productServices = require('../services/mysql/productServices');

const getAllProducts = async () => {
	try {
		const allProducts = await productServices.getAllProducts();
		return allProducts;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const saveProducts = async prod => {
	await productServices.saveProducts(prod);
};

module.exports = { getAllProducts, saveProducts };
