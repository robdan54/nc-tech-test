/** @format */

const fs = require('fs/promises');

exports.fetchCards = () => {
	return fs.readFile('src/data/cards.json', 'utf-8').then((rawCards) => {
		const parsedCards = JSON.parse(rawCards);
		return Promise.resolve(
			fs.readFile('src/data/templates.json', 'utf-8')
		).then((templates) => {
			parsedTemplates = JSON.parse(templates);
			return parsedCards.map(
				// Maps the template ids to Cards to find the url and formats the card objects ready to send
				(card) => ({
                    title: card.title,
                    card_id: card.id,
					card_url: parsedTemplates.find(
						(element) => element.id === card.pages[0].templateId
					).imageUrl,
				})
			);
		});
	});
};
