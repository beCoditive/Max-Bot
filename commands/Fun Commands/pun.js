"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')

const meme = require("random-jokes-api")

class punCommand extends discord_akairo_1.Command {
    constructor() {
        super('pun', {
            aliases: ['pun'],
            category: 'Fun Commands',
            description: {
                content: 'Tells a pun to the user.',
                usage: 'pun',
                examples: [
                    'pun'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
        let pun = meme.pun();
        const Embed = new Discord.MessageEmbed()
             .setTitle('Here is a Pun!')
             .setDescription(pun)
             .setColor('RANDOM')
             message.channel.send(Embed)
    }
}
exports.default = punCommand;
