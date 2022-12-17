const { faker } = require('@faker-js/faker');

const productsFaker = cant => {
	const listProduct = [];

	for (let i = 0; i < cant; i++) {
		const product = {
			id: i + 1,
			title: faker.commerce.productName(),
			price: faker.commerce.price(),
			url: faker.image.imageUrl(),
		};

		listProduct.push(product);
	}

	return listProduct;
};

module.exports = productsFaker;
