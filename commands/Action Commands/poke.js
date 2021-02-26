"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('pokes', {
            aliases: ['pokes'],
            category: 'Action Commands',
            description: {
                content: 'Generate a pokes image of some user.',
                usage: 'pokes <User>',
                examples: [
                    'pokes @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
        const member = message.mentions.users.first()
        if(!member) return message.channel.send('Mention Some user to Poke')

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} pokes ${member.username}`)
        .setImage('https://media1.tenor.com/images/1e0ea8b241a7db2b9c03775133138733/tenor.gif?itemid=10064326')
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}
exports.default = ripCommand;
