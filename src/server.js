/** @format */

const express = require('express');
const {getCards} = require('./controllers/card-controllers')

const app = express();
app.use(express.json())

app.set('json spaces', 2);

app.get('/cards', getCards);

app.get('/cards/:cardId/:sizeId?', () => {
	// respond with card by id
});

module.exports = app;
