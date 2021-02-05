"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super('ping', {
            aliases: ['ping'],
            category: 'Public Commands',
            description: {
                content: 'Check the latency of the ping to the Discord API',
                usage: 'ping',
                examples: [
                    'ping'
                ]
            },
            ratelimit: 3
        });
    }
    exec(message) {
        return message.util.send(`Pong! \`${this.client.ws.ping}\`ms`);
    }
}
exports.default = PingCommand;
