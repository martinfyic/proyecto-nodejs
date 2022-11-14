const productService = require('../services/productService');

const getAllProducts = async (req, res) => {
	const allProducts = await productService.getAllProducts();
	res.status(200).send({ status: 'OK', data: allProducts });
};

const getProductById = async (req, res) => {
	const productById = await productService.getProductById(req);
	res.status(200).send({ status: 'OK', data: productById });
};

const createNewProduct = async (req, res) => {
	const { body } = req;
	if (!body.title || !body.price || !body.thumbnail) return;

	const newProduct = {
		title: body.title,
		price: body.price,
		thumbnail: body.thumbnail,
	};

	const createdProduct = await productService.createNewProduct(newProduct);
	res.redirect('/');
};

//TODO ----
const upDateOneProduct = (req, res) => {
	const updatedProduct = productService.upDateOneProduct(req);
	res.send('Update one product');
};

//TODO ----
const deleteOneProduct = (req, res) => {
	const deletedProduct = productService.deleteOneProduct(req);
	res.send('Delete a product');
};

module.exports = {
	getAllProducts,
	getProductById,
	createNewProduct,
	upDateOneProduct,
	deleteOneProduct,
};
