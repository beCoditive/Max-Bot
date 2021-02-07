"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
const config_1 = require("../config");
const Database_1 = __importDefault(require("../structures/Database"));
class BotClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: config.owners
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, "..", "listeners"),
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, "..", "commands"),
            prefix: config_1.prefix,
            allowMention: true,
            handleEdits: true,
            commandUtil: true,
            commandUtilLifetime: 3e5,
            defaultCooldown: 6e4,
            argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `${str}\n\nType \`cancel\` to cancel the command.`,
                    modifyRetry: (_, str) => `${str}\n\nType \`cancel\` to cancel the command.`,
                    timeout: 'You took too long, the command has now been cancelled...',
                    ended: 'You exceeded the maximum amount of tries, this command has now been cancelled...',
                    cancel: 'This command has been cancelled...',
                    retries: 3,
                    time: 3e4
                },
                otherwise: ''
            },
            ignorePermissions: config_1.owners
        });
        this.config = config;
    }
    async _init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
        this.db = Database_1.default.get(config_1.dbName);
        await this.db.connect();
        await this.db.synchronize();
    }
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = BotClient;
