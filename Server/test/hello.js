import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

chai.should();
chai.use(chaiHttp);

describe('/GET hello', () => {
  it('it should GET the hello world response', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.text.should.be.eql('Hello World!');
        done();
      });
  });
});
