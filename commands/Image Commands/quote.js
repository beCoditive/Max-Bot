"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const Canvas = require('canvas')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('quote', {
            aliases: ['quote'],
            category: 'Image Commands',
            description: {
                content: 'quote',
                usage: 'quote <User>',
                examples: [
                    'quote @user'
                ]
            },
            args: [
                {
                    id: 'text',
                    type: 'text',
                    prompt: {
                        start: (message) => `Please provide a text to quote.`,
                    },
                    match: 'rest'
                },
            ],
            ratelimit: 10
        });
    }
    async exec(message , { text}) {


        const canvas = Canvas.createCanvas(2024 ,500);
        const ctx = canvas.getContext('2d')
      
        const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/802855640632524803/808952455512981504/Untitled-1.png')
        ctx.drawImage(background, 0, 0 ,canvas.width , canvas.height);
      
        ctx.strokeStyle = '#740';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
      
        
      
        const userName = message.member.displayName

        ctx.font = '70px valorant'
        ctx.fillStyle = '#fff';
        ctx.fillText(userName, 300 , 150);

        ctx.font = '60px "sans serif"'
        ctx.fillStyle = '#777';
        ctx.fillText(`Today at 6:20 PM`, 900 , 150);

        ctx.font = '80px "sans serif"'
        ctx.fillStyle = '#fff';
        ctx.fillText(text, 300 , 300);

        const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg' }));

        ctx.beginPath();
        ctx.beginPath();
        ctx.arc( 150, 150, 120, 0, 2 * Math.PI);
        ctx.clip();
       

        ctx.drawImage(avatar , 25 , 25, 250, 250);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        message.channel.send(attachment)
      
    }
}
exports.default = ripCommand;
