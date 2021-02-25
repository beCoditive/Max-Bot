"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('tickle', {
            aliases: ['tickle'],
            category: 'Action Commands',
            description: {
                content: 'Generate a tickle image of some user.',
                usage: 'tickle <User>',
                examples: [
                    'tickle @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
        const member = message.mentions.users.first()
        if(!member) return message.channel.send('Mention Some user to Tickle')

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} tickles ${member.username}`)
        .setImage('https://cdn.nekos.life/v3/sfw/gif/tickle/tickle_016.gif')
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}
exports.default = ripCommand;
