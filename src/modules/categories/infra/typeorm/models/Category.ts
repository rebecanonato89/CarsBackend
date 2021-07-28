import { v4 as uuidV4 } from 'uuid';

class Category {
	id?: string;
	name: string;
	description: string;
	created_at: Date;

	construtor() {
		if (!this.id) {
			this.id = uuidV4();
		}
	}
}

export { Category };
