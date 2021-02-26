"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('hug', {
            aliases: ['hug'],
            category: 'Action Commands',
            description: {
                content: 'Generate a huges image of some user.',
                usage: 'hug <User>',
                examples: [
                    'hug @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
        const member = message.mentions.users.first()
        if(!member) return message.channel.send('Mention Some user to Hug')

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} Hugs ${member.username}`)
        .setImage('https://i.imgur.com/cRfX87T.gif')
        .setColor('RANDOM')
      message.channel.send(embed)
    }
}
exports.default = ripCommand;
