import chai from 'chai';
import chaiHttp from 'chai-http';
// eslint-disable-next-line no-unused-vars
import beforeall from './beforeall';
import App from '../index';
import logger from '../logger';


chai.should();
chai.use(chaiHttp);

let server;

before(async () => {
  logger.debug('before test');
  const app = new App();
  server = await app.init();
  server.listen(3000);
  logger.debug('before test done');
});

describe('/GET types', () => {
  it('Returns a list of types', (done) => {
    chai.request(server)
      .get('/types')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.type.should.be.eq('application/json');
        res.body.length.should.be.eq(2);
        done();
      });
  });
});
