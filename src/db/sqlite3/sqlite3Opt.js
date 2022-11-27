const options = {
	client: 'sqlite3',
	connection: {
		filename: './src/db/sqlite3/ecommerce.sqlite',
	},
	useNullAsDefault: true,
};

module.exports = { options };
