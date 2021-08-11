import { Request, Response } from 'express';
import { CategoriesRepository } from '../infra/typeorm/repositories/CategoriesRepository';

import { CreateCategoryService } from '../services/CreateCategoryService';

export default class CreateCardController {
	public async create(
		request: Request,
		response: Response,
	): Promise<Response | void> {
		const { name, description } = request.body;
		try {
			const categoriesRepository = new CategoriesRepository();

			const createCategoryService = new CreateCategoryService(categoriesRepository);

			createCategoryService.execute({ name, description });

			return response.status(200).json({ message: 'success' });
		} catch (error) {
			return response.json({ message: 'Something went wrong: ', error });
		}
	}
}
