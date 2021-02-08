"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
let insults  = require('../../roast_list').insult
class RoastCommand extends discord_akairo_1.Command {
    constructor() {
        super('spoiler', {
            aliases: ['spoiler'],
            category: 'Fun Commands',
            description: {
                content: 'Make some spoiler text.',
                usage: 'spoiler <Text>',
                examples: [
                    'spoiler This is a Spoiler.'
                ]
            },
            ratelimit: 3
        });
    }
    async exec(message , args) {
        let spoilerText = message.content.slice(9)
         
        message.channel.send(`||${spoilerText}||`)
    }
}
exports.default = RoastCommand;
