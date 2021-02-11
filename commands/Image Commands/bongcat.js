"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('bongcat', {
            aliases: ['bongcat'],
            category: 'Image Commands',
            description: {
                content: 'Generate a bongcat image of some user.',
                usage: 'bongcat <User>',
                examples: [
                    'bongcat @user'
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
      
        const b = await Canvas.loadImage('https://media.discordapp.net/attachments/802855640632524803/809029057726513192/bongocat.png?width=439&height=439')
        ctx.drawImage(b, 0, 0 ,canvas.width , canvas.height); 

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        message.channel.send(attachment)
      
    }
}
exports.default = ripCommand;
