const { optionsMySQL } = require('../../db/mysql/mysqlOpt');
const knex = require('knex')(optionsMySQL);

const getAllProducts = async () => {
	try {
		const allProducts = await knex.from('products').select('*');
		return allProducts;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const saveProducts = async prod => {
	await knex('products')
		.insert(prod)
		.then(() => console.log('Producto guardado en DB'));
};

module.exports = { getAllProducts, saveProducts };
