"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('smug', {
            aliases: ['smug'],
            category: 'Action Commands',
            description: {
                content: 'Generate a smug image of some user.',
                usage: 'smug <User>',
                examples: [
                    'smug @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {


        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} is smug`)
        .setImage('https://cdn.nekos.life/v3/sfw/gif/smug/smug_037.gif')
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}
exports.default = ripCommand;
