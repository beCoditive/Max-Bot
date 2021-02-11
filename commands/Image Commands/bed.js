"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('bed', {
            aliases: ['bed'],
            category: 'Image Commands',
            description: {
                content: 'Generate a bed image of some user.',
                usage: 'bed <User>',
                examples: [
                    'bed @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
        const memberLogo = message.mentions.users.first()
        ? message.mentions.users.first().displayAvatarURL({ format: 'png' , size: 2048 })
        : message.author.displayAvatarURL({ format: 'png' ,  size: 2048 })

        const canvas = Canvas.createCanvas( 500 ,1320);
        const ctx = canvas.getContext('2d')
      
        const b = await Canvas.loadImage('https://pics.me.me/mum-theres-a-monster-under-my-bed-its-the-most-32228026.png')
        ctx.drawImage(b, 0, 0 ,canvas.width , canvas.height); 

        const avatar3 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/804927645824581652/808306781415669790/download.png');
        ctx.drawImage(avatar3 , 30 , 105, 170, 170);
   
        const avatar4 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/804927645824581652/808306781415669790/download.png');
        ctx.drawImage(avatar4 , 20 , 455, 170, 170);

        const avatar5 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/804927645824581652/808306781415669790/download.png');
        ctx.drawImage(avatar5 , 65 , 720, 120, 120);

        const avatar = await Canvas.loadImage(memberLogo)

        ctx.drawImage(avatar , 70, 925, 130, 130); 

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        message.channel.send(attachment)
      
    }
}
exports.default = ripCommand;
