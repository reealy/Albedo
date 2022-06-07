"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// Import environment variables from .env file
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Bot config
const { NODE_ENV, TOKEN_BOT, CLIENT_ID } = process.env;
if (!TOKEN_BOT) {
    throw new Error("Token not found");
}
exports.config = {
    env: NODE_ENV,
    token: TOKEN_BOT,
    clientId: CLIENT_ID
};
