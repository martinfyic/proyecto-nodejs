const fakerProducts = require('../services/faker/fakerProducts');
const products = fakerProducts(5);

const renderingFakerProds = (req, res) => {
	res.render('fakerProds', { products: products });
};

module.exports = { renderingFakerProds };
