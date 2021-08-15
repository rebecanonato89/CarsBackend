import { Router } from 'express';
import CategoriesController from '../../../controllers/categoriesController';

const categoriesRoutes = Router();

const categoriesController = new CategoriesController();

categoriesRoutes.post('/', categoriesController.create);
categoriesRoutes.get('/', categoriesController.list);

export { categoriesRoutes };
