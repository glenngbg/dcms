import chai from 'chai';
import chaiHttp from 'chai-http';
import {
  describe,
  it,
} from 'mocha';

chai.should();
chai.use(chaiHttp);

describe('/GET hello', () => {
  it('it should GET the hello world response', (done) => {
    chai.request('http://localhost:3000')
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.text.should.be.eql('Hello World!');
        done();
      });
  });
});
