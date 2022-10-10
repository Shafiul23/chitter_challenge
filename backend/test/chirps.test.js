import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';
import { expect } from 'chai';

chai.use(chaiHttp);

describe('Tests', () => {
    it('should get all chirps', async () => {
        const res = await chai.request(server)
            .get('/chirps')
            .send()

        expect(res).to.have.status(200);
    })
})