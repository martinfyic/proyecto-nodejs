const messageServices = require('../services/sqlite3/messageServices');

const getAllMessages = async () => {
	const messages = await messageServices.getAllMessages();
	return messages;
};

const saveMessage = async message => {
	await messageServices.saveMessage(message);
};

module.exports = {
	getAllMessages,
	saveMessage,
};
