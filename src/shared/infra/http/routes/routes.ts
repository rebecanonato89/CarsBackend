import { Router } from 'express';
import { categoriesRoutes } from '@modules/categories/infra/http/routes/categories.routes';

const routes = Router();

routes.use('/categories', categoriesRoutes);

export default routes;
