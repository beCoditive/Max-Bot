
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class DankRateCommand extends discord_akairo_1.Command {
    constructor() {
        super('dankrate', {
            aliases: ['dankrate'],
            category: 'Fun Commands',
            description: {
                content: 'Gives you your Dank rate.',
                usage: 'dankrate',
                examples: [
                    'dankrate'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , text) {
        let p = Math.floor(Math.random() * 100)
        let embed = new Discord.MessageEmbed()
        .setTitle('Dank r8 machine')
        .setColor('RANDOM')
        .setDescription(`You are ${p}% Dank.`)

        message.channel.send(embed)
    }

}
exports.default = DankRateCommand;
