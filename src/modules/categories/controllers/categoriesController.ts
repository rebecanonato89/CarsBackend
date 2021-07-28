import { Request, Response } from 'express';

import { Category } from '@modules/categories/infra/typeorm/models/Category';

const categories: Category[] = [];

export default class CreateCardController {
	public async create(
		request: Request,
		response: Response,
	): Promise<Response | void> {
		const { name, description } = request.body;
		try {
			const category: Category = {
				name,
				description,
				created_at: new Date(),
			};

			categories.push(category);

			return response.status(200).json({ message: 'success' });
		} catch (error) {
			return response.json({ message: 'Something went wrong: ', error });
		}
	}
}
