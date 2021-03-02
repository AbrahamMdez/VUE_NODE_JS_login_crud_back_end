import request from 'supertest';
import app from '../src/main/config/app.js';

import UserModel from '../src/models/UserModel.js';
const userData = { 
    name: 'name', 
    email: 'email@email', 
    password: '123', 
    role: 'ADMIN' 
};

let testServer;

beforeAll(() => {
    testServer = app.listen(3000);
});

afterAll((done) => {
    testServer.close(done)
});

describe('GET /api/profile', () => {
    it('should return all profiles', async () => {
        
        const response = await request(app).get('/profile');

        expect(response.error).toBe(false);
        expect(response.status).toBe(200);
    });
});