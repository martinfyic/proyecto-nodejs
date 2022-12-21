const { optionsMySQL } = require('../mysql/mysqlOpt');
const knexMySQL = require('knex')(optionsMySQL);

const productTable = async () => {
	try {
		await knexMySQL.schema.createTable('products', table => {
			table.increments('id').primary();
			table.string('title');
			table.integer('price');
			table.string('url');
		});
		console.log('Se creo la tabla products');
	} catch (error) {
		console.error(error);
		throw error;
	} finally {
		knexMySQL.destroy();
	}
};

productTable();
