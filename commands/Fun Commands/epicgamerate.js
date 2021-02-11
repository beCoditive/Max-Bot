
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class EpicGameRateCommand extends discord_akairo_1.Command {
    constructor() {
        super('epicgamerate', {
            aliases: ['epicgamerate'],
            category: 'Fun Commands',
            description: {
                content: 'Gives you your Epic game rate.',
                usage: 'epicgamerate',
                examples: [
                    'epicgamerate'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , text) {
        let p = Math.floor(Math.random() * 100)
        let embed = new Discord.MessageEmbed()
        .setTitle('Epic Gamer rate machine')
        .setColor('Random')
        .setDescription(`You are ${p}% Epic Gamer  😎 .`)

        message.channel.send(embed)
    }

}
exports.default = EpicGameRateCommand;
