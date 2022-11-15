const { io } = require('../app');

const products = [];
const messages = [];

io.on('connection', socket => {
	console.log(`✅ Usuario con Id: ${socket.id} conectado...`);

	socket.on('disconnect', () => {
		console.log(`❌ Usuario con Id: ${socket.id} desconectado...`);
	});

	socket.on('addProduct', addProd => {
		products.push(addProd);
		io.sockets.emit('addedProd', products);
	});

	socket.emit('addedProd', products);

	socket.on('sendMessage', sendMessage => {
		messages.push(sendMessage);
		socket.emit('messages', messages);
	});
});
