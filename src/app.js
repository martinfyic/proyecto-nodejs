const express = require('express');
// const socketIO = require('socket.io');
// const http = require('http');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const path = require('path');
const dotenv = require('dotenv');
const v1ProdRouter = require('./v1/routes/productsRoutes');
const v1WebSocket = require('./v1/routes/websocketRoutes');

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
// const server = http.createServer(app);
const httpServer = new HttpServer(app);

const publicPath = path.resolve(__dirname, './public');

app.use(express.json());
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use('/', v1WebSocket);
app.use('/api/v1/productos', v1ProdRouter);

app.set('views', './src/public/views');
app.set('view engine', 'ejs');

const io = new IOServer(httpServer);
io.on('connection', socket => {
	console.log('Cliente conectado...');
});

const serverOn = httpServer.listen(PORT, () => {
	console.log(`🚀 Servidor funcionando en http://localhost:${PORT}`);
});
serverOn.on('error', err => {
	console.log(`Error ===> ${err}`);
});
