console.clear();
const express = require('express');
const http = require('http');
const path = require('path');
const dotenv = require('dotenv');
const v1ProdRouter = require('./v1/routes/productsRoutes');
const socketIO = require('socket.io');

dotenv.config();
const app = express();
const server = http.createServer(app);

const publicPath = path.resolve(__dirname, './public');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/productos', v1ProdRouter);

let io = socketIO(server);

const serverOn = server.listen(PORT, () => {
	console.log(`🚀 Servidor funcionando en http://localhost:${PORT}`);
});
serverOn.on('error', err => {
	console.log(`Error ===> ${err}`);
});
