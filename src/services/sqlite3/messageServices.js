const { options } = require('../../db/sqlite3/sqlite3Opt');
const knex = require('knex')(options);

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
};
