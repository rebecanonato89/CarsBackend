import { server } from '@config/index';
import AppError from '../../errors/AppError';
import ERRORS from '../../constants/messages/ERRORS';
import express from './app';

try {
	express.app.listen(server.port, () => {
		console.info('🚀 Server started on', {
			port: server.port,
			env: server.env,
		});
	});
} catch (e) {
	throw new AppError(ERRORS.server.code500, e, 500);
}
