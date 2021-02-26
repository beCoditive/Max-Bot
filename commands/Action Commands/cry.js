"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('cry', {
            aliases: ['cry'],
            category: 'Action Commands',
            description: {
                content: 'Generate a cry image of some user.',
                usage: 'cry <User>',
                examples: [
                    'cry @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} is crying :'c`)
        .setImage('https://cdn.weeb.sh/images/HkxLXIQvb.gif')
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}
exports.default = ripCommand;
