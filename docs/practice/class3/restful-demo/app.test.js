const app = require('./app')
const request = require('supertest')

describe('API 測試', () => {
  // beforeAll(async () => {})
  // afterAll(async () => {})
  // beforeEach(async () => {})
  // afterEach(async () => {})

  afterAll(async () => {
    // https://github.com/visionmedia/supertest/issues/520
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
  })

  test('get todo', async () => {
    const response = await request(app.callback())
      .get('/posts/1')
      .set('Content-Type', 'application/json')
    // .set('Authorization', `bearer ${token}`)
    // .query()

    expect(response.status).toBe(200)
    const result = response.body
    expect(Object.keys(result)).toEqual(expect.arrayContaining(['userId', 'id', 'title', 'body']))
    expect(result).toHaveProperty('id', 1)
  })

  test('create a post', async () => {
    const response = await request(app.callback())
      .post('/posts')
      .set('Content-Type', 'application/json')
      .send({ title: 'demo test' })

    expect(response.status).toBe(201)
    const result = response.body

    expect(result).not.toEqual(null)
    expect(result).toHaveProperty('id', 6)
  })

  test('update a post', async () => {
    const data = { title: 'demo title' }
    const response = await request(app.callback())
      .patch('/posts/1')
      .set('Content-Type', 'application/json')
      .send(data)

    expect(response.status).toBe(200)
    const result = response.body
    expect(result).toEqual(
      expect.objectContaining({
        id: 1,
        userId: expect.any(Number),
        title: data.title,
        body: expect.any(String),
      })
    )
  })
})
