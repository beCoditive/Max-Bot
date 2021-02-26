"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('goggles', {
            aliases: ['goggles'],
            category: 'Image Commands',
            description: {
                content: 'Generate a goggles image of some user.',
                usage: 'goggles <User>',
                examples: [
                    'goggles @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
        const memberLogo = message.mentions.users.first()
        ? message.mentions.users.first().displayAvatarURL({ format: 'png' , size: 2048 })
        : message.author.displayAvatarURL({ format: 'png' ,  size: 2048 })

        const canvas = Canvas.createCanvas(463 ,516);
        const ctx = canvas.getContext('2d')
      
        const b = await Canvas.loadImage('./Assets/Images/goggles.png');
        ctx.drawImage(b, 0, 0 ,canvas.width , canvas.height); 

        const avatar1 = await Canvas.loadImage('https://p.kindpng.com/picc/s/21-217710_white-fade-corner-png-corner-black-fade-png.png')
        ctx.drawImage(avatar1, 32 , 175 , 150 , 140);  

        const avatar = await Canvas.loadImage(memberLogo)
        ctx.drawImage(avatar, 40 , 180 , 130 , 130);  

      
    
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        message.channel.send(attachment)
      
    }
}
exports.default = ripCommand;
