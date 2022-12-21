const mongoose = require('mongoose');

const chatCenterSchema = mongoose.Schema(
	{
		id: String,
		author: {
			id: String,
			name: String,
			lastname: String,
			age: Number,
			alias: String,
			avatar: String,
		},
		text: String,
		date: Number,
	},
	{ versionKey: false }
);

const chatCenterModel = mongoose.model('normalizr', chatCenterSchema);

module.exports = chatCenterModel;
