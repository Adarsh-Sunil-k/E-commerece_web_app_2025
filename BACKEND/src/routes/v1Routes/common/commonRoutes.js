import express from 'express'
import commonController from '../../../controllers/common/commonController.js';

const commonRouter = express.Router();

commonRouter.get('/get-categories',commonController.getCategories);

commonRouter.get('/single-categories/:slug',commonController.singleCategory);


export default commonRouter;