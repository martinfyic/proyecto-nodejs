const DB = require('./db.json');

const getAllProducts = () => {
	return DB;
};

module.exports = { getAllProducts };
