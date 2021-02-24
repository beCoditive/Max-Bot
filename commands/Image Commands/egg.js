"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas'); 
class UlgyCommand extends discord_akairo_1.Command {
    constructor() {
        super('egg', {
            aliases: ['egg'],
            category: 'Image Commands',
            description: {
                content: 'Makes a egg using your text.',
                usage: 'egg',
                examples: [
                    'egg You are a big Fool'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {

  const canvas = Canvas.createCanvas( 300 , 300);
  const ctx = canvas.getContext('2d')

  const background = await Canvas.loadImage('./Images/egg.png')
  ctx.drawImage(background, 0, 0 ,canvas.width , canvas.height);

  ctx.strokeStyle = '#740';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  const memberLogo = message.mentions.users.first()
        ? message.mentions.users.first().displayAvatarURL({ format: 'jpg' })
        : message.author.displayAvatarURL({ format: 'jpg' })

  const avatar = await Canvas.loadImage(memberLogo);
  ctx.drawImage(avatar , 115, 155, 50, 50);

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  message.channel.send(attachment)

    }
}
exports.default = UlgyCommand;
