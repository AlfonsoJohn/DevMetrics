const request = require('supertest');
const { app, startServer } = require('../index');

beforeAll(async () => {
  await startServer(); // Ensure the server is started before tests
});

describe('POST /api/commit', () => {
  it('should insert a commit entry', async () => {
    const res = await request(app)
      .post('/api/commit')
      .send({ user_id: 1, message: 'Initial commit', success: true });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });
});

describe('POST /api/build', () => {
  it('should insert a build entry and return it', async () => {
    const res = await request(app)
      .post('/api/build')
      .send({ user_id: 1, duration: 120, success: true });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.duration).toEqual(120);
  });
});

