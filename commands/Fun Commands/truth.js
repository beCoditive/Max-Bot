"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const meme = require('random-jokes-api')
class MemeCommand extends discord_akairo_1.Command {
    constructor() {
        super('truth', {
            aliases: ['truth'],
            category: 'Fun Commands',
            description: {
                content: 'Generate truths from public API',
                usage: 'truth',
                examples: [
                    'truth'
                ]
            },
            ratelimit: 3
        });
    }
    async exec(message , args) {
        let truth = meme.truth()

        const memberName = message.mentions.users.first()
        ? message.mentions.users.first().username
        : message.author.username

        let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} asked ${memberName}`)
        .setColor('RANDOM')
        .setDescription(truth)

        message.channel.send(embed)
    }
}
exports.default = MemeCommand;
