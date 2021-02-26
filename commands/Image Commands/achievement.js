"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas')
let jokes  = require('../../Assets/logo_ran').jokes;
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('achievement', {
            aliases: ['achievement' ],
            category: 'Image Commands',
            description: {
                content: 'Generate a achievement image of some user.',
                usage: 'achievement <Name>',
                examples: [
                    'achievement BIG'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
      Canvas.registerFont("./Assets/font/MineC.otf", { family: "minecraft" })

       const achievementText = message.content.slice(13)
       if(!achievementText) return message.channel.send('What achievement do you want lol')

        const canvas = Canvas.createCanvas(802 , 188);
        const ctx = canvas.getContext('2d')
      
        const b = await Canvas.loadImage('./Assets/Images/ac.png')
        ctx.drawImage(b, 0, 0 ,canvas.width , canvas.height); 

        let q = jokes[Math.floor(Math.random() * jokes.length)]

        const l = await Canvas.loadImage(`./Assets/Images/Minecraft/${q.title}.png`)
        ctx.drawImage(l, 45, 57 , 75 , 75); 

        ctx.font = '40px "minecraft"'
         ctx.fillStyle = '#fff';
         ctx.fillText(achievementText, 135 , 135);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        message.channel.send(attachment)
      
    }
}
exports.default = ripCommand;
