
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class WaifuRateCommand extends discord_akairo_1.Command {
    constructor() {
        super('waifu', {
            aliases: ['waifu'],
            category: 'Fun Commands',
            description: {
                content: 'Gives you your Epic game rate.',
                usage: 'waifu',
                examples: [
                    'waifu'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , text) {
        let p = Math.floor(Math.random() * 100)
        let embed = new Discord.MessageEmbed()
        .setTitle('Waifu r8 machine')
        .setColor('RANDOM')
        .setDescription(`You are ${p}/100 Waifu  😊.`)

        message.channel.send(embed)
    }

}
exports.default = WaifuRateCommand;
