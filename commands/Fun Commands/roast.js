"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const fetch = require('node-fetch')
let insults  = require('../../roast_list').insult
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
            ratelimit: 3
        });
    }
    async exec(message , args) {
        let  r = insults[Math.floor(Math.random() * insults.length)]
        const Embed = new Discord.MessageEmbed()
             .setTitle(message.author.tag + ' ' +  r.title)
             .setColor('RANDOM')
             .setFooter('You have been Roasted by Max Bot')
             message.channel.send(Embed)
    }
}
exports.default = RoastCommand;
