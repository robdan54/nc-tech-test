/** @format */

const express = require('express');
const { getCards, postCard } = require('./controllers/card-controllers');
const { handlesCustomErrors } = require('./controllers/error-controllers');

const app = express();
app.use(express.json());

app.set('json spaces', 2);

app.get('/cards', getCards);
app.post('/cards', postCard);

app.get('/cards/:cardId', getCards)

app.get('/cards/:cardId/:sizeId?', () => {
	// respond with card by id
});

app.all('/*', (req, res) => {
	res.status(404).send({ msg: 'Path not found' });
});

app.use(handlesCustomErrors);

module.exports = app;
