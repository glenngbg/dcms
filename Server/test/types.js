import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

chai.should();
chai.use(chaiHttp);

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
