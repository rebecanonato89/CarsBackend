import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes/routes';

class App {
	public readonly app: Application;

	constructor() {
		this.app = express();
		this.middlewares();
	}

	private middlewares(): void {
		this.app.use(express.json());
		this.app.use(cors());
		this.app.use(routes);
	}
}

export default new App();
