"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const discord_akairo_1 = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')

class coinFlipCommand extends discord_akairo_1.Command {
    constructor() {
        super('roll', {
            aliases: ['roll'],
            category: 'Fun Commands',
            description: {
                content: 'roll, return a number between 1-100 ',
                usage: 'roll',
                examples: [
                    'roll'
                ]
            },
            ratelimit: 3
        });
    }
    async exec(message , args) {

        let randomNo = Math.floor(Math.random() * 100) + 1

        let Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`<@${message.author.id}> rolls a dice and the outcome is 🎲 ${randomNo} 🎲`)
        await message.channel.send(Embed)
    }
}
exports.default = coinFlipCommand;