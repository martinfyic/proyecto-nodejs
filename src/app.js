const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const dotenv = require('dotenv');
const v1ProdRouter = require('./v1/routes/productsRoutes');
const v1WebSocket = require('./v1/routes/websocketRoutes');

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

const publicPath = path.resolve(__dirname, './public');

app.use(express.json());
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/productos', v1ProdRouter);
app.use('/', v1WebSocket);

app.set('views', './src/public/views');
app.set('view engine', 'ejs');

const product = [];

let io = socketIO(server);

const serverOn = server.listen(PORT, () => {
	console.log(`🚀 Servidor funcionando en http://localhost:${PORT}`);
});
serverOn.on('error', err => {
	console.log(`Error ===> ${err}`);
});
