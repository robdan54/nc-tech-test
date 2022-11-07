/** @format */

const fs = require('fs/promises');

exports.fetchCards = (cardId) => {
	return fs.readFile('src/data/cards.json', 'utf-8').then((rawCards) => {
		const parsedCards = JSON.parse(rawCards);
		return Promise.resolve(fs.readFile('src/data/templates.json', 'utf-8'))
			.then((templates) => {
				parsedTemplates = JSON.parse(templates);
				return parsedCards.map(
					// Maps the template ids to Cards to find the url and formats the card objects ready to send
					(card) => ({
						...card,
						imageUrl: parsedTemplates.find(
							(element) => element.id === card.pages[0].templateId
						).imageUrl,
					})
				);
			})
			.then((cards) => {
				if (!cardId) {
					//if no parametric endpoint just returns the list of cards
					return cards.map((card) => {
						return {
							title: card.title,
							imageUrl: card.imageUrl,
							card_id: card.id,
						};
					});
				} else {
					const card = cards.find(
						(card) => parseInt(card.id.match(/(\d+)/)) == cardId //uses a regex to extract the unique number id
                    );
                    if (!card) return Promise.reject({
											status: 404,
											msg: 'Card not found',
										});
                    card.base_price = card.basePrice
                    card.availableSizes = card.sizes
                    card.card_id = card.id

                    delete card.basePrice
                    delete card.sizes
                    delete card.id
                    return card
				}
            });
	});
};

exports.addCard = (newCard) => {
    
}