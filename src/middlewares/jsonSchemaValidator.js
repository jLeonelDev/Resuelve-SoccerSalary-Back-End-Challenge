import Ajv from 'ajv';
import constants from '../helpers/constants';
import winstonLogger from '../helpers/winstonLogger';
import teamSalaryPostRequestSchema from '../json-schemas/teamSalaryPostRequest';


const ajv = Ajv({ allErrors: true, removeAdditional: 'all' });
ajv.addSchema(teamSalaryPostRequestSchema, constants.JSON_SCHEMA_REQUEST_POST_TEAM_SALARY);

function errorResponse(schemaErrors) {
  return schemaErrors.map(error => ({
    field: error.dataPath ? error.dataPath : '',
    message: error.message ? error.message : '',
  }));
}

// eslint-disable-next-line consistent-return
const validateSchema = schemaName => (req, res, next) => {
  const valid = ajv.validate(schemaName, req.body);
  if (!valid) {
    winstonLogger.error(constants.INVALID_REQUEST);
    return res.status(400).send(errorResponse(ajv.errors));
  }
  next();
};

export default validateSchema;
