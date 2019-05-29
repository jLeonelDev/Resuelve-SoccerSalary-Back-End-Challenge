import { _ } from 'lodash';
import scoreGoals from '../config/scoreGoals';
import winstonLogger from '../helpers/winstonLogger';
import constants from '../helpers/constants';


function obtainSalaryScope(scoreGoal, scores) {
  return _.divide(scores, scoreGoal);
}

function obtainSalary(teamSalaryScope, playerSalaryScope, salary, bonus) {
  let fullBonus = 0;
  if (bonus) {
    let salaryScope = _.add(teamSalaryScope, playerSalaryScope);
    salaryScope = _.divide(salaryScope, 2);
    fullBonus = _.multiply(salaryScope, bonus);
  }
  return _.round(_.add(fullBonus, salary), 2);
}

function obtainTeamSalaryScope(team) {
  let teamScoreGoal = 0;
  let teamScores = 0;
  team.forEach((player) => {
    teamScoreGoal = _.add(teamScoreGoal, scoreGoals.getGoals(player.nivel));
    teamScores = _.add(teamScores, player.goles);
  });
  return obtainSalaryScope(teamScoreGoal, teamScores);
}

function processPlayer(player, teamSalaryScope, callback) {
  let playerScoreGoal = 0;
  let playerScores = 0;

  playerScoreGoal = _.add(playerScoreGoal, scoreGoals.getGoals(player.nivel));
  playerScores = _.add(playerScores, player.goles);

  winstonLogger.info(constants.LMI_OBTAINING_PLAYER_SALARY_SCOPE);
  const playerSalaryScope = obtainSalaryScope(playerScoreGoal, playerScores);

  winstonLogger.info(constants.LMI_OBTAINING_PLAYER_SALARY);
  const playerWithSalary = _.clone(player);
  playerWithSalary.sueldo_completo = obtainSalary(teamSalaryScope,
    playerSalaryScope, player.sueldo, player.bono);
  callback(playerWithSalary);
}

function processTeam(team, callback) {
  const teamWithSalary = [];

  winstonLogger.info(constants.LMI_OBTAINING_TEAM_SALARY_SCOPE);
  const teamSalaryScope = obtainTeamSalaryScope(team);

  winstonLogger.info(constants.LMI_PROCESSING_TEAM_PLAYER);
  _.forEach(team, player => processPlayer(player, teamSalaryScope, (playerWithSalary) => {
    teamWithSalary.push(playerWithSalary);
  }));

  callback(teamWithSalary);
}

function salaryController(body, callback) {
  const requestBody = _.groupBy(body, 'equipo');
  let response = [];
  winstonLogger.info(constants.LMI_PROCESSING_TEAMS);
  _.forEach(requestBody, team => processTeam(team, (teamWithSalary) => {
    response = _.concat(response, teamWithSalary);
  }));
  winstonLogger.info(constants.LMI_PROCESSING_TEAMS_FINISHED);
  callback(response);
}

export default salaryController;

if (process.env.NODE_ENV === 'test') {
  module.exports = {
    obtainSalaryScope,
    obtainSalary,
    obtainTeamSalaryScope,
    processPlayer,
    processTeam,
    salaryController,
  };
}
