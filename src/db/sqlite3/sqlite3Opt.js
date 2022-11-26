const options = {
	client: 'sqlite3',
	connection: {
		// filname: './src/databases/sqlite3/sqlite3DB.sqlite',
		filename: './src/db/sqlite3/ecommerce.sqlite',
	},
	useNullAsDefault: true,
};

module.exports = { options };
