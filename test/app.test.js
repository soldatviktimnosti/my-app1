const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('should return welcome message', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toContain('Hello from CI/CD Pipeline!');
    });
});

describe('GET /health', () => {
    it('should return health status', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('OK');
    });
});