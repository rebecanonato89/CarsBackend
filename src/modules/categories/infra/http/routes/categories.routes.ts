import { Router } from 'express';
import CategoriesController from '../../../controllers/categoriesController';

const categoriesRoutes = Router();

const categoriesController = new CategoriesController();

categoriesRoutes.post('/', categoriesController.create);

export { categoriesRoutes };
