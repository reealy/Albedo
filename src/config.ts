// Import environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

// Bot config
const { NODE_ENV, TOKEN_BOT, CLIENT_ID } = process.env;

if (!TOKEN_BOT) {
	throw new Error("Token not found");
}

export const config = {
	env: NODE_ENV,
	token: TOKEN_BOT,
	clientId: CLIENT_ID
};