const {Router} = require('express');
const {getTypesHandler}= require('../handlers/typeHandlers.js');
const typesRouter = Router();

typesRouter.get('/',getTypesHandler);

module.exports = typesRouter;