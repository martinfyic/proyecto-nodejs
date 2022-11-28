const optionsSQLite3 = {
	client: 'sqlite3',
	connection: {
		filename: './src/db/sqlite3/ecommerce.sqlite',
	},
	useNullAsDefault: true,
};

module.exports = { optionsSQLite3 };
