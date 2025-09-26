const request = require('supertest');
const app = require('../app/app');

describe('Health Check', () => {
    it('should return 200 OK', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('OK');
        expect(response.body.port).toBe(8080);  // Проверяем порт
    });
});
