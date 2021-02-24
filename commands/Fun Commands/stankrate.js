
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class EpicGameRateCommand extends discord_akairo_1.Command {
    constructor() {
        super('stankrate', {
            aliases: ['stankrate'],
            category: 'Fun Commands',
            description: {
                content: 'Gives you your stank rate.',
                usage: 'stankrate',
                examples: [
                    'stankrate'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , text) {
        let p = Math.floor(Math.random() * 100)
        const em = `https://cdn.discordapp.com/emojis/661978710513287175.png?v=1`
        let embed = new Discord.MessageEmbed()
        .setTitle('stank r8 machine')
        .setColor('RANDOM')
        .setDescription(`You are ${p}% stanky 😱`)

        message.channel.send(embed)
    }

}
exports.default = EpicGameRateCommand;
