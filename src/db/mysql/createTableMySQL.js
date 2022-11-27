const { options } = require('./mysqlOpt');
const knex = require('knex')(options);

const messageTable = async () => {
	try {
		await knex.schema.createTable('products', table => {
			table.increments('id').primary();
			table.string('title');
			table.integer('price');
			table.string('url');
		});
		console.log('Se creo la tabla messages');
	} catch (error) {
		console.error(error);
		throw error;
	} finally {
		knex.destroy();
	}
};

messageTable();
