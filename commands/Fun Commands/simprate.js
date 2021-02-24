
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class simpRateCommand extends discord_akairo_1.Command {
    constructor() {
        super('simprate', {
            aliases: ['simprate'],
            category: 'Fun Commands',
            description: {
                content: 'Gives you your Simp rate.',
                usage: 'simprate',
                examples: [
                    'simprate'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , text) {
        let p = Math.floor(Math.random() * 100)
        let embed = new Discord.MessageEmbed()
        .setTitle('simp r8 machine')
        .setColor('RANDOM')
        .setDescription(`You are ${p}% Simp.`)

        message.channel.send(embed)
    }

}
exports.default = simpRateCommand;
