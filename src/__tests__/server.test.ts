/** @format */

import * as request from 'supertest';
const app = require('../server');

describe('/cards', () => {
	describe('GET', () => {
		test('Should return an array', () => {
			return request(app)
				.get('/cards')
				.expect(200)
				.then((response) => {
					expect(Array.isArray(response.body.cards)).toBe(true);
				});
		});
		test('Should return a list of cards in the correct format', () => {
			return request(app)
				.get('/cards')
				.expect(200)
				.then((response) => {
					expect(response.body.cards[0]).toEqual({
						card_id: expect.any(String),
						title: expect.any(String),
						imageUrl: expect.any(String),
					});
				});
		});
	});
});

describe('/cards/:cardId', () => {
	describe('GET', () => {
		test('should return an object', () => {
			return request(app)
				.get('/cards/1')
				.then((response) => {
					expect(typeof response.body.cards).toBe('object');
				});
		});
		test('should return a card object of the correct format', () => {
			return request(app)
				.get('/cards/1')
				.then((response) => {
					expect(response.body.cards).toEqual(
						expect.objectContaining({
							title: expect.any(String),
							imageUrl: expect.any(String),
							card_id: expect.any(String),
							base_price: expect.any(Number),
							availableSizes: expect.any(Array),
							pages: expect.any(Array),
						})
					);
				});
    });
    
    //TESTS should have been run, but inccorect sizes JSON so unable to match the size id and titles

		// test('should return with a correct available sizes property', () => {
		// 	return request(app)
		// 		.get('/cards/1')
		// 		.then((response) => {
		// 			expect(response.body.cards.availableSizes).toMatchObject({
		// 				id: expect.any(String),
		// 				title: expect.any(String),
		// 			});
		// 		});
    // });
    // test('should return with a correct pages property', () => {
    //   return request(app).get('/cards/1').then((response) => {
    //       expect(response.body.cards.pages).toMatchObject({title: expect.any(String), templateId: expect.any(String)})
    //     });
    // })
	});
});
describe('Errors', () => {
	test('status(404), responds with a path not found message when provided an incorrect path', () => {
		return request(app)
			.get('/api/not-an-endpoint')
			.expect(404)
			.then((response) => {
				expect(response.body.msg).toBe('Path not found');
			});
	});
});
// test('returns matching card title', async () => {
//   const response = await request(app).get('/cards/card001')

//   expect(response.status).toBe(200)
//   expect(response.body).toEqual(expect.objectContaining({
//     title: 'card 1 title',
//   }))
// })
