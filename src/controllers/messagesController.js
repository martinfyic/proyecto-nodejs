const messageServices = require('../services/mongoDB/messageServices');
const { normalize, schema, denormalize } = require('normalizr');
const { inspect } = require('util');

const getAllMessages = async () => {
	const getMessages = await messageServices.getAllMessages();

	const chatCenter = {
		id: 'idChatCenter',
		messages: getMessages,
	};

	const authorSchema = new schema.Entity('authors');

	const messageSchema = new schema.Entity('messages', {
		author: authorSchema,
		id: { type: String },
		text: '',
		date: { type: Number },
	});

	const chatSchema = new schema.Entity('chats', {
		id: 'mensajes',
		messages: [messageSchema],
	});

	const normalizedData = normalize(chatCenter, chatSchema);

	// console.log(inspect(normalizedData, false, null, true));
	// console.log(getMessages.length);
	// console.log(JSON.stringify(getMessages).length);
	// console.log(JSON.stringify(normalizedData).length);

	function porcentaje(uno, dos) {
		const porcentajes = Math.round(100 - (uno * 100) / dos);
		console.log(
			'porcentaje de compresión del proceso de normalización: ',
			porcentajes,
			'%'
		);
	}

	porcentaje(
		JSON.stringify(normalizedData).length,
		JSON.stringify(getMessages).length
	);

	return getMessages;
};

const saveMessage = async message => {
	await messageServices.saveMessage(message);
};

module.exports = {
	getAllMessages,
	saveMessage,
};
