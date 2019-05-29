/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable import/named */
import { expect } from 'chai';
import {
  obtainSalaryScope,
  obtainSalary,
  obtainTeamSalaryScope,
  processPlayer,
  processTeam,
  salaryController,
} from '../../../controllers/salaryController';
import { teamData, teamBlueData, playerData } from './salaryControllerData.test';

describe('salaryController()', () => {
  it('obtainSalaryScope is a function', () => {
    expect(typeof obtainSalaryScope).to.be.equal('function');
  });
  it('call obtainSalaryScope(10,10) = 1', () => {
    expect(obtainSalaryScope(10, 10)).to.be.equal(1);
  });
  it('call obtainSalaryScope(10,15) > 1', () => {
    expect(obtainSalaryScope(10, 15)).to.be.greaterThan(1);
  });
  it('call obtainSalaryScope(10,9) < 1', () => {
    expect(obtainSalaryScope(10, 9)).to.be.lessThan(1);
  });


  it('call obtainSalary(0.96,0.95,50000,10000) = 59550', () => {
    const teamSalaryScope = 0.96;
    const playerSalaryScope = 0.95;
    const salary = 50000;
    const bonus = 10000;
    expect(obtainSalary(teamSalaryScope, playerSalaryScope, salary, bonus))
      .to.be.equal(59550);
  });

  it('call obtainSalary(1.48,1.4,20000,10000) = 34400', () => {
    const teamSalaryScope = 1.48;
    const playerSalaryScope = 1.4;
    const salary = 20000;
    const bonus = 10000;
    expect(obtainSalary(teamSalaryScope, playerSalaryScope, salary, bonus))
      .to.be.equal(34400);
  });


  it('call obtainTeamSalaryScope(team) = 1.48', () => {
    expect(obtainTeamSalaryScope(teamBlueData))
      .to.be.equal(1.48);
  });

  it('call processPlayer(player, 0.95, callback) = sueldo_completo = 42450', () => {
    processPlayer(playerData, 0.76, (playerWithSalary) => {
      expect(playerWithSalary.sueldo_completo).to.be.equal(42450);
    });
  });

  it('call processTeam(team, callback) = sueldo_completo = 144700 && 34400', () => {
    processTeam(teamBlueData, (teamWithSalary) => {
      expect(teamWithSalary[0].sueldo_completo).to.be.equal(144700)
      && expect(teamWithSalary[1].sueldo_completo).to.be.equal(34400);
    });
  });

  it('call salaryController(team, callback) = sueldo_completo = 67833.33 && 42450 && 144700 && 34400', () => {
    salaryController(teamData, (allTeamsWithSalary) => {
      expect(allTeamsWithSalary[0].sueldo_completo).to.be.equal(67833.33)
        && expect(allTeamsWithSalary[1].sueldo_completo).to.be.equal(42450)
        && expect(allTeamsWithSalary[2].sueldo_completo).to.be.equal(144700)
        && expect(allTeamsWithSalary[3].sueldo_completo).to.be.equal(34400);
    });
  });
});
