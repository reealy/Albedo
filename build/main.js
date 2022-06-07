"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const config_1 = require("./config");
console.log("Connecting to Discord...");
// Create a new Discord client
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MEMBERS,
    ]
});
client.once("ready", () => {
    console.log("Ready!");
});
// Login to Discord with your app's token
client.login(config_1.config.token);
