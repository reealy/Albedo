import { Client, Intents } from "discord.js";
import { config } from "./config";

console.log("Starting bot...");
// Create a new Discord client
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
    ] 
});

client.once("ready", () => {
    console.log("Bot is ready!");
});

// Login to Discord with your app's token
client.login(config.token);