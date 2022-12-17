const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const path = require('path');
const dotenv = require('dotenv');
const v1WebSocket = require('./v1/routes/websocketRoutes');
const v1ProductosTest = require('./v1/routes/productosTestRoutes');

dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();
const httpServer = new HttpServer(app);
const publicPath = path.resolve(__dirname, './public');

app
	.use(express.json())
	.use(express.static(publicPath))
	.use(express.urlencoded({ extended: true }))
	.use('/', v1WebSocket)
	.use('/', v1ProductosTest);

app.set('views', './src/public/views').set('view engine', 'ejs');

module.exports.io = new IOServer(httpServer);
require('./sockets/socket');

const serverOn = httpServer.listen(PORT, () => {
	console.log(`***** 🚀 Servidor en http://localhost:${PORT} *****`);
});
serverOn.on('error', err => {
	console.log(`Error ===> ${err}`);
});
