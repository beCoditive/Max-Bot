"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class jokeCommand extends discord_akairo_1.Command {
    constructor() {
        super('lenny', {
            aliases: ['lenny'],
            category: 'Fun Commands',
            description: {
                content: 'Tells a lenny to the user.',
                usage: 'lenny',
                examples: [
                    'lenny'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
        message.channel.send('( ͡° ͜ʖ ͡°)')
    }
}
exports.default = jokeCommand;
