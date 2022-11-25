const productServices = require('../services/mysql/productServices');

const rendering = (req, res) => {
	res.render('index');
};

const getAllProducts = async () => {
	const allProducts = await productServices.getAllProducts();
	return allProducts;
};

const saveProducts = async prod => {
	await productServices.saveProducts(prod);
};

module.exports = { rendering, getAllProducts, saveProducts };
