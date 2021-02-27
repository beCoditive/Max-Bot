"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const meme = require('random-jokes-api')
class MemeCommand extends discord_akairo_1.Command {
    constructor() {
        super('wouldyourather', {
            aliases: ['wouldyourather'],
            category: 'Fun Commands',
            description: {
                content: 'Generate wouldyourathers from public API',
                usage: 'wouldyourather',
                examples: [
                    'wouldyourather'
                ]
            },
            ratelimit: 3
        });
    }
    async exec(message , args) {
        let truth = meme.wouldYouRather()

        let embed = new Discord.MessageEmbed()
        .setTitle(`Would you rather..`)
        .setColor('RANDOM')
        .setDescription(truth)

        message.channel.send(embed)
    }
}
exports.default = MemeCommand;
