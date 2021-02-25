"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('wave', {
            aliases: ['wave'],
            category: 'Action Commands',
            description: {
                content: 'Generate a wave image of some user.',
                usage: 'wave <User>',
                examples: [
                    'wave @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {

        const member = message.mentions.users.first()
        if(!member) return message.channel.send('Mention Some user to Wave')

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} says hello to ${member.username}`)
        .setImage('https://cdn.weeb.sh/images/r1wc4onRW.gif')
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}
exports.default = ripCommand;
