import { config } from 'dotenv';

const envDir = process.cwd();
const envFile = `.env.${process.env.NODE_ENV}`;

config({ path: `${envDir}/${envFile}` });

export const server = {
	port: process.env.PORT || 3333,
	env: process.env.NODE_ENV,
};
