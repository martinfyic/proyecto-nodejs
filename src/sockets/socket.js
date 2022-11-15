const { io } = require('../app');

const products = [];
const messages = [];

io.on('connection', socket => {
	console.log('✅ Cliente conectado...');

	socket.on('disconnect', () => {
		console.log('❌ Cliente desconectado...');
	});

	socket.on('addProduct', addProd => {
		products.push(addProd);
		socket.emit('addedProd', products);
	});

	socket.on('sendMessage', sendMessage => {
		messages.push(sendMessage);
		socket.emit('messages', messages);
	});
});
