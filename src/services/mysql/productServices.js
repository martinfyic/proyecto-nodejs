const { option } = require('../../database/mysql/mysqlOpt');
const knex = require('knex')(option);

const getAllProducts = async () => {
	const allProducts = await knex.from('products').select('*');
	return allProducts;
};

const saveProducts = async prod => {
	await knex('products')
		.insert(prod)
		.then(() => console.log('Producto guardado en DB'));
};

module.exports = { getAllProducts, saveProducts };
