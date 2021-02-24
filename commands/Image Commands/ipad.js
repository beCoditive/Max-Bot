"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const Canvas = require('canvas')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('ipad', {
            aliases: ['ipad'],
            category: 'Image Commands',
            description: {
                content: 'Generate a ipad image of some user.',
                usage: 'ipad <User>',
                examples: [
                    'ipad @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
        const memberLogo = message.mentions.users.first()
        ? message.mentions.users.first().displayAvatarURL({ format: 'png' })
        : message.author.displayAvatarURL({ format: 'png' })

        const canvas = Canvas.createCanvas(720 ,479);
        const ctx = canvas.getContext('2d')
      
        const background = await Canvas.loadImage('https://icdn2.digitaltrends.com/image/digitaltrends_es/ipad-17-768x511.jpg')
        ctx.drawImage(background, 0, 0 ,canvas.width , canvas.height);
      
        ctx.strokeStyle = '#740';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
      
        const avatar = await Canvas.loadImage(memberLogo);
        ctx.rotate(-22 * Math.PI / 180);
        ctx
        ctx.drawImage(avatar , 85 , 220, 120, 184);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        message.channel.send(attachment)
      
    }
}
exports.default = ripCommand;
