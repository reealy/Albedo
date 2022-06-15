// Import environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

// Bot config :
// 
// NODE_ENV defines the environment the bot is running in
// TOKEN_BOT is the discord bot token from the discord developer portal
// CLIENT_ID is the client id of the bot
// GUILD_ID is the guild id of the dev server 

const { NODE_ENV, TOKEN_BOT, CLIENT_ID, GUILD_ID } = process.env;

// TOKEN_BOT is mandatory
if (!TOKEN_BOT) {
	throw new Error("Token not found");
}

// GUILD_ID is mandatory if NODE_ENV === "development"
// Used for development, it avoids deploying commands to all guilds
if (NODE_ENV === "development" && !GUILD_ID) {
	throw new Error("Guild ID not found");
}

export const config = {
	env: NODE_ENV,
	token: TOKEN_BOT,
	clientId: CLIENT_ID,
	guildId: GUILD_ID
};