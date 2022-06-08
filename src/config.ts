// Import environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

// Bot config :
// 
// NODE_ENV defines the environment the bot is running in
// TOKEN_BOT is the discord bot token from the discord developer portal
// CLIENT_ID is the client id of the bot

const { NODE_ENV, TOKEN_BOT, CLIENT_ID } = process.env;

// TOKEN_BOT is mandatory
if (!TOKEN_BOT) {
	throw new Error("Token not found");
}

export const config = {
	env: NODE_ENV,
	token: TOKEN_BOT,
	clientId: CLIENT_ID
};