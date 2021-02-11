"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('jail', {
            aliases: ['jail'],
            category: 'Image Commands',
            descjailtion: {
                content: 'Generate a jail image of some user.',
                usage: 'jail <User>',
                examples: [
                    'jail @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
        const memberLogo = message.mentions.users.first()
        ? message.mentions.users.first().displayAvatarURL({ format: 'png' , size: 2048 })
        : message.author.displayAvatarURL({ format: 'png' ,  size: 2048 })

        const canvas = Canvas.createCanvas(300 ,300);
        const ctx = canvas.getContext('2d')
      
        const avatar = await Canvas.loadImage(memberLogo)
        ctx.drawImage(avatar, 0, 0 ,canvas.width , canvas.height);  
      
        const b = await Canvas.loadImage('https://www.jing.fm/clipimg/full/90-902254_jail-clipart-png-prison-bars-png.png')
        ctx.drawImage(b, 0, 0 ,canvas.width , canvas.height); 

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        message.channel.send(attachment)
      
    }
}
exports.default = ripCommand;
