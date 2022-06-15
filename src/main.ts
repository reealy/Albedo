import "reflect-metadata";

import { dirname, importx } from "@discordx/importer";
import type { Interaction, Message } from "discord.js";
import { Intents } from "discord.js";
import { Client } from "discordx";
import { config } from "./config.js";

export const bot = new Client({
	// To only use global commands (use @Guild for specific guild command), comment this line
	botGuilds: [
		(): string => {
			let guild: string = "";
			
			if (config.env === "development") {
				guild = config.guildId as string;
			}

			return guild;
		}
	],

	// Discord intents
	intents: [
	Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MEMBERS,
	Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
	Intents.FLAGS.GUILD_VOICE_STATES,
	],

	// Debug logs are disabled in silent mode
	silent: false,

	// Configuration for @SimpleCommand
	simpleCommand: {
	prefix: "!",
	},
});

bot.once("ready", async () => {
	// Make sure all guilds are cached
	await bot.guilds.fetch();

	// Synchronize applications commands with Discord
	await bot.initApplicationCommands();

	// Synchronize applications command permissions with Discord
	await bot.initApplicationPermissions();

	// To clear all guild commands, uncomment this line,
	// This is useful when moving from guild commands to global commands
	// It must only be executed once	
	// await bot.clearApplicationCommands(
	//    ...bot.guilds.cache.map((g) => g.id)
	// );

	console.log("Bot started");
});

bot.on("interactionCreate", (interaction: Interaction) => {
	bot.executeInteraction(interaction);
});

bot.on("messageCreate", (message: Message) => {
	bot.executeCommand(message);
});

async function run() {
	// The following syntax should be used in the ECMAScript environment
	await importx(dirname(import.meta.url) + "/{events,commands}/**/*.{ts,js}");
	// Log in with your bot token
	await bot.login(config.token);
}

run();
