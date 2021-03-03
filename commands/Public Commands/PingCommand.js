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
            ratelimit: 10
        });
    }
    // Trying out a new embed method
    exec(message, args) {
        return message.util.send({
            embed: {
                color: '#14b1f5',
                description: `🏓 Pong - ${this.client.ws.ping} milliseconds.`,
                timestamp: new Date(),
                footer: {
                    text: 'Max Bot',
                },
            }
        });
    }
}
exports.default = PingCommand;
