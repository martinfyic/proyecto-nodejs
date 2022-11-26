const { options } = require('../../db/sqlite3/sqlite3Opt');
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

const getAllMessages = async () => {
	const allMessages = await knex.from('messages').select('*');
	return allMessages;
};

const saveMessage = async message => {
	await knex
		.from('messages')
		.insert(message)
		.then(() => console.log('Mensaje guardado en DB'));
};

module.exports = {
	getAllMessages,
	saveMessage,
	messageTable,
};
