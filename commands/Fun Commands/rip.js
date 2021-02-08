"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const Canvas = require('canvas')
class TriviaCommand extends discord_akairo_1.Command {
    constructor() {
        super('rip', {
            aliases: ['rip'],
            category: 'Fun Commands',
            description: {
                content: 'Generate a rip image of some user.',
                usage: 'rip <User>',
                examples: [
                    'rip @user'
                ]
            },
            ratelimit: 3
        });
    }
    async exec(message , args) {
       
        const memberLogo = message.mentions.users.first()
        ? message.mentions.users.first().displayAvatarURL({ format: 'jpg' })
        : message.author.displayAvatarURL({ format: 'jpg' })

        const canvas = Canvas.createCanvas(642 , 806);
        const ctx = canvas.getContext('2d')
      
        const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/802855640632524803/807223424974979123/41998b02-cc55-4bbc-8f75-f6b246d5b9c2_200x200.png')
        ctx.drawImage(background, 0, 0 ,canvas.width , canvas.height);
      
        ctx.strokeStyle = '#740';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
      
        const avatar = await Canvas.loadImage(memberLogo);
        ctx.drawImage(avatar , 196 , 378, 250, 250);
      
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        message.channel.send(attachment)
      
    }
}
exports.default = TriviaCommand;
