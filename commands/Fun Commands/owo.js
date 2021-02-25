"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class jokeCommand extends discord_akairo_1.Command {
    constructor() {
        super('owo', {
            aliases: ['owo'],
            category: 'Fun Commands',
            description: {
                content: 'Tells a owo to the user.',
                usage: 'owo',
                examples: [
                    'owo'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
        message.channel.send('OwO')
    }
}
exports.default = jokeCommand;
