const express = require('express');
const router = express.Router();

router.get('/productos', (req, res) => {
	res.send(`<h1>Probando router desde ${req.baseUrl}</h1>`);
});

module.exports = router;
