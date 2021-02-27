"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('bonk', {
            aliases: ['bonk'],
            category: 'Image Commands',
            description: {
                content: 'Generate a bonk image of some user.',
                usage: 'bonk <User>',
                examples: [
                    'bonk @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
        const memberLogo = message.mentions.users.first()
        ? message.mentions.users.first().displayAvatarURL({ format: 'png' , size: 2048 })
        : message.author.displayAvatarURL({ format: 'png' ,  size: 2048 })

        const canvas = Canvas.createCanvas(930 ,500);
        const ctx = canvas.getContext('2d')
      
        const b = await Canvas.loadImage('./Assets/Images/bonk.png');
        ctx.drawImage(b, 0, 0 ,canvas.width , canvas.height); 

        const avatar = await Canvas.loadImage(memberLogo)
        ctx.drawImage(avatar, 650 , 240 , 230 , 230);  

        const avatar2 = await Canvas.loadImage('https://purepng.com/public/uploads/large/purepng.com-baseball-batbaseballball-gameteamsbaseballsbaseball-bat-1701528088891ggo9b.png')
        ctx.rotate(10 * Math.PI / 180)
        ctx.drawImage(avatar2 , 530 , 70 , 320 , 320);  
    
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        message.channel.send(attachment)
      
    }
}
exports.default = ripCommand;
