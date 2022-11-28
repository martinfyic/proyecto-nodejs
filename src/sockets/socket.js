const { io } = require('../app');
const {
	saveProducts,
	getAllProducts,
} = require('../controllers/productsController');
const {
	saveMessage,
	getAllMessages,
} = require('../controllers/messagesController');

io.on('connection', async socket => {
	console.log(`✅ Usuario con Id: ${socket.id} conectado...`);

	socket.on('disconnect', () => {
		console.log(`❌ Usuario con Id: ${socket.id} desconectado...`);
	});

	socket.on('addProduct', async addProd => {
		await saveProducts(addProd);
		io.sockets.emit('addedProd', await getAllProducts());
	});

	socket.emit('addedProd', await getAllProducts());
	await getAllProducts();

	socket.on('sendMessage', async sendMessage => {
		await saveMessage(sendMessage);
		io.sockets.emit('messages', await getAllMessages());
	});

	socket.emit('messages', await getAllMessages());
});
