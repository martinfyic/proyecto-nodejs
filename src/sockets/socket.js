const { io } = require('../app');
const {
	saveProducts,
	getAllProducts,
} = require('../controllers/websocketController');

// const products = [];
const messages = [];

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
	let coso = await getAllProducts();
	console.log(coso);

	socket.on('sendMessage', sendMessage => {
		messages.push(sendMessage);
		io.sockets.emit('messages', messages);
	});

	socket.emit('messages', messages);
});
