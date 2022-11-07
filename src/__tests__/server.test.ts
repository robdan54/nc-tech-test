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
						card_url: expect.any(String),
					});
				});
		});
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
