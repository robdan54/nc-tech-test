import * as request from 'supertest'
const app = require('../server') 

describe('/cards', () => {
  describe('GET', () => {
    test("Should return an array", () => {
      return request(app).get('/cards').expect(200).then((response) => {
        expect(Array.isArray(response.body.cards)).toBe(true)
      })
      })
    })
});

test('returns matching card title', async () => {
  const response = await request(app).get('/cards/card001')

  expect(response.status).toBe(200)
  expect(response.body).toEqual(expect.objectContaining({
    title: 'card 1 title',
  }))
})
