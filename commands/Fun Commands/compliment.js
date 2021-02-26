"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')

const meme = require('random-jokes-api')

class RoastCommand extends discord_akairo_1.Command {
    constructor() {
        super('compliment', {
            aliases: ['compliment'],
            category: 'Fun Commands',
            description: {
                content: 'Get complimented by Max Bot.',
                usage: 'compliment',
                examples: [
                    'compliment'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
        let com = meme.copmliment()
        message.channel.send(`<@${message.author.id}> ${com}`)
    }
}
exports.default = RoastCommand;
