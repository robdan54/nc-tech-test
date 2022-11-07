/** @format */

const { fetchCards, fetchCardById } = require('../models/card-models');

exports.getCards = (req, res, next) => {
	fetchCards()
		.then((cards) => {
			res.status(200).send({ cards });
		})
		.catch(next);
};

exports.getCard = (req, res, next) => {
	res.status(200).send({card : {}})
};
