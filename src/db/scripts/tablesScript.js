const { optionsMySQL } = require('../mysql/mysqlOpt');
const knexMySQL = require('knex')(optionsMySQL);
const { optionsSQLite3 } = require('../sqlite3/sqlite3Opt');
const knexSQLite3 = require('knex')(optionsSQLite3);

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

const messageTable = async () => {
	try {
		await knexSQLite3.schema.createTable('messages', table => {
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
		knexSQLite3.destroy();
	}
};

productTable();
messageTable();
