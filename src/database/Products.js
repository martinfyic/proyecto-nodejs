const DB = require('./db.json');
const { saveToDB } = require('./helpers');

const getAllProducts = async () => {
	return DB;
};

const getProductById = async req => {
	const { prodId } = req.params;
	const productById = DB.filter(product => product.id === Number(prodId));
	const existId = DB.some(product => product.id === Number(prodId));
	return existId
		? productById
		: {
				Error: `El producto con Id: ${prodId} no existe`,
		  };
};

const createNewProduct = async newProduct => {
	const isAlreadyAdded = DB.some(product => product.title === newProduct.title);
	if (isAlreadyAdded) return;

	const getAllId = DB.map(product => product.id);
	const newId = Math.max(...getAllId) + 1;
	const newProdWhithId = { id: newId, ...newProduct };

	DB.push(newProdWhithId);
	saveToDB(DB);
	return newProdWhithId;
};

module.exports = { getAllProducts, getProductById, createNewProduct };
