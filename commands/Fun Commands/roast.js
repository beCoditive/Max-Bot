"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')

const meme = require('random-jokes-api')

class RoastCommand extends discord_akairo_1.Command {
    constructor() {
        super('roast', {
            aliases: ['roast'],
            category: 'Fun Commands',
            description: {
                content: 'Get Roasted by Max Bot.',
                usage: 'roast',
                examples: [
                    'roast'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
        let roast = meme.roast();

        const Embed = new Discord.MessageEmbed()
             .setTitle(message.author.tag + ' ' +  roast)
             .setColor('RANDOM')
             .setFooter('You have been Roasted by Max Bot')
             message.channel.send(Embed)
    }
}
exports.default = RoastCommand;
