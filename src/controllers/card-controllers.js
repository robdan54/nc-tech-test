/** @format */

const { fetchCards, fetchCardById } = require('../models/card-models');

exports.getCards = (req, res, next) => {
	const { cardId } = req.params;
	fetchCards(cardId)
        .then((cards) => {
                res.status(200).send({ cards });
        })
		.catch(next);
};
