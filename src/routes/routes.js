import { Router } from 'express';
import winstonLogger from '../helpers/winstonLogger';
import constants from '../helpers/constants';
import validateSchema from '../middlewares/jsonSchemaValidator';
import salaryController from '../controllers/salaryController';

const router = Router();


router.post('/team/salary', validateSchema(constants.JSON_SCHEMA_REQUEST_POST_TEAM_SALARY),
  (req, res) => {
    winstonLogger.info(constants.LMI);
    salaryController(req.body, data => res.send(data));
  });

export default router;
