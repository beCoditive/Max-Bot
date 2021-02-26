
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class GayRateCommand extends discord_akairo_1.Command {
    constructor() {
        super('howgay', {
            aliases: ['howgay'],
            category: 'Fun Commands',
            description: {
                content: 'Gives you your Gay rate.',
                usage: 'howgay',
                examples: [
                    'howgay'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , text) {
        let p = Math.floor(Math.random() * 100)
        let embed = new Discord.MessageEmbed()
        .setTitle('Gay r8 machine')
        .setColor('RANDOM')
        .setDescription(`You are ${p}% Gay.`)

        message.channel.send(embed)
    }

}
exports.default = GayRateCommand;
