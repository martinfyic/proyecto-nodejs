const express = require('express');
const websocketRoute = express.Router();
const websocketController = require('../../controllers/websocketController');

websocketRoute.get('/', websocketController.rendering);

module.exports = websocketRoute;
