"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const discord_akairo_1 = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')

class coinFlipCommand extends discord_akairo_1.Command {
    constructor() {
        super('coinflip', {
            aliases: ['coinflip', 'coin', 'roll', 'flip', 'headsortails'],
            category: 'Fun Commands',
            description: {
                content: 'Coinflip, return head or tails to the use',
                usage: 'coinflip',
                examples: [
                    'coinflip'
                ]
            },
            ratelimit: 3
        });
    }
    async exec(message , args) {

        let coinArray = [
            'heads',
            'tails'
        ]

        let answer = Math.floor(Math.random() * coinArray.length);

        let Embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`I flipped a coin and it landed on **${coinArray[answer]}**`)
        await message.channel.send(Embed)
    }
}
exports.default = coinFlipCommand;