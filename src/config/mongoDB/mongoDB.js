const mongoose = require('mongoose');

const mongoConnect = async () => {
	const MONGODB_URL = process.env.MONGODB_URL;
	mongoose.connect(
		MONGODB_URL,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		err => {
			!err
				? console.log('***** CONECTADO A MONGODB ✅ *****')
				: console.log('***** ERROR EN CONEXION A DB ⚠️ *****');
		}
	);
};

module.exports = { mongoConnect };
