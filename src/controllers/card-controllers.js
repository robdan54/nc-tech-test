/** @format */

const { fetchCards, addCard } = require('../models/card-models');

exports.getCards = (req, res, next) => {
	const { cardId } = req.params;
	fetchCards(cardId)
		.then((cards) => {
			res.status(200).send({ cards });
		})
		.catch(next);
};

exports.postCard = (req, res, next) => {
    const newCard = req.body
    console.log(newCard)
    addCard(newCard)
}
