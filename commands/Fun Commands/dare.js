"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const meme = require('random-jokes-api')
class MemeCommand extends discord_akairo_1.Command {
    constructor() {
        super('dare', {
            aliases: ['dare'],
            category: 'Fun Commands',
            description: {
                content: 'Generate dares from public API',
                usage: 'dare',
                examples: [
                    'dare'
                ]
            },
            ratelimit: 3
        });
    }
    async exec(message , args) {
        let dare = meme.dare()

        const memberName = message.mentions.users.first()
        ? message.mentions.users.first().username
        : message.author.username

        let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} dared ${memberName}`)
        .setColor('RANDOM')
        .setDescription(dare)

        message.channel.send(embed)
    }
}
exports.default = MemeCommand;
