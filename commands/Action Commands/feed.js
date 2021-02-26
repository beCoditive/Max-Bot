"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('feed', {
            aliases: ['feed'],
            category: 'Action Commands',
            description: {
                content: 'Generate a feed image of some user.',
                usage: 'feed <User>',
                examples: [
                    'feed @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
        const member = message.mentions.users.first()
        if(!member) return message.channel.send('Mention Some user to Feed')

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} feeds ${member.username}`)
        .setImage('https://cdn.nekos.life/v3/sfw/gif/feed/feed_001.gif')
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}
exports.default = ripCommand;
