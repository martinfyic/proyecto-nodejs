const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const v1Router = require('./v1/routes/productsRoutes');
const socketIO = require('socket.io');
const http = require('http');

dotenv.config();
const app = express();
const server = http.createServer(app);

const publicPath = path.resolve(__dirname, './public');
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use('/api/v1', v1Router);

let io = socketIO(server);

const serverOn = server.listen(PORT, () => {
	console.log(`🚀 Servidor funcionando en http://localhost:${PORT}`);
});
serverOn.on('error', err => {
	console.log(`Error ===> ${err}`);
});
