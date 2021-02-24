
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class EpicGameRateCommand extends discord_akairo_1.Command {
    constructor() {
        super('rankthot', {
            aliases: ['rankthot'],
            category: 'Fun Commands',
            description: {
                content: 'Gives you your Rank Thotties rate.',
                usage: 'rankthot',
                examples: [
                    'rankthot'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , text) {
        let p = Math.floor(Math.random() * 100)
        let embed = new Discord.MessageEmbed()
        .setTitle('Thotties be thotting')
        .setColor('RANDOM')
        .setDescription(`You are ${p}% 😏.`)

        message.channel.send(embed)
    }

}
exports.default = EpicGameRateCommand;
