const chatCenterModel = require('../../schemas/chatCenterSchema');
const { v4: uuidv4 } = require('uuid');

const getAllMessages = async () => {
	const allMessages = await chatCenterModel.find({}).lean();
	return allMessages;
};

const saveMessage = async message => {
	const saveChat = new chatCenterModel({
		id: uuidv4(),
		author: {
			id: message.userEmail,
			name: message.userName,
			lastname: message.userLastName,
			age: message.userAge,
			alias: message.userAlias,
			avatar: message.userAvatar,
			date: message.date,
		},
		text: message.message,
		date: new Date(),
	});

	await saveChat.save();
};

module.exports = {
	getAllMessages,
	saveMessage,
};
