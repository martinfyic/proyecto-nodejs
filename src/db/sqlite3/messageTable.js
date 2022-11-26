const { options } = require('./sqlite3Opt');
const knex = require('knex')(options);

const messageTable = async () => {
	try {
		await knex.schema.createTable('messages', table => {
			table.increments('id').primary();
			table.string('email');
			table.string('message');
			table.string('date');
		});
		console.log('Se creo la tabla messages');
	} catch (error) {
		console.error(error);
		throw error;
	} finally {
		knex.destroy();
	}
};

module.exports = {
	messageTable,
};
