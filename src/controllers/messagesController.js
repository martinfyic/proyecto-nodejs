const messageServices = require('../services/sqlite3/messageServices');

const messageTable = () => {
	const tableCreated = messageServices.messageTable();
	return tableCreated;
};

const getAllMessages = async () => {
	const messages = await messageServices.getAllMessages();
	return messages;
};

const saveMessage = async message => {
	await messageServices.saveMessage(message);
};

module.exports = {
	messageTable,
	getAllMessages,
	saveMessage,
};
