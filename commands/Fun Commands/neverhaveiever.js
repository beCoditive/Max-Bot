"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const meme = require('random-jokes-api')
class MemeCommand extends discord_akairo_1.Command {
    constructor() {
        super('neverhaveiever', {
            aliases: ['neverhaveiever'],
            category: 'Fun Commands',
            description: {
                content: 'Generate neverhaveievers from public API',
                usage: 'neverhaveiever',
                examples: [
                    'neverhaveiever'
                ]
            },
            ratelimit: 3
        });
    }
    async exec(message , args) {
        let truth = meme.neverHaveIEver()

        let embed = new Discord.MessageEmbed()
        .setTitle(`Never Have I Ever..`)
        .setColor('RANDOM')
        .setDescription(truth)

        message.channel.send(embed)
    }
}
exports.default = MemeCommand;
