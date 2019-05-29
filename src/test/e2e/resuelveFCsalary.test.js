/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import { teamData, teamDataWrong } from '../unit/controllers/salaryControllerData.test';

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const url = 'http://localhost:3000';

describe('e2e - ResulveFC Salary: ', () => {
  it('POST - /team/salary - success', (done) => {
    chai.request(url)
      .post('/team/salary')
      .send(teamData)
      .end((_err, res) => {
        console.log(_err);
        chai.expect(res).to.have.status(200)
        && chai.expect(res.body[0].sueldo_completo).to.be.equal(67833.33)
        && chai.expect(res.body[1].sueldo_completo).to.be.equal(42450)
        && chai.expect(res.body[2].sueldo_completo).to.be.equal(144700)
        && chai.expect(res.body[3].sueldo_completo).to.be.equal(34400);
        done();
      });
  });

  it('POST - /team/salary - failed', (done) => {
    chai.request(url)
      .post('/team/salary')
      .send(teamDataWrong)
      .end((_err, res) => {
        console.log(_err);
        chai.expect(res).to.have.status(400);
        done();
      });
  });
});
