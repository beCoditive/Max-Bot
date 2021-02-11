"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas'); 
class UlgyCommand extends discord_akairo_1.Command {
    constructor() {
        super('door', {
            aliases: ['door'],
            category: 'Image Commands',
            description: {
                content: 'Makes a door using your text.',
                usage: 'door',
                examples: [
                    'door You are a big Fool'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {

  const canvas = Canvas.createCanvas( 1000 , 479);
  const ctx = canvas.getContext('2d')

  

  ctx.strokeStyle = '#740';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  const memberLogo = message.mentions.users.first()
        ? message.mentions.users.first().displayAvatarURL({ format: 'png' , size : 2048})
        : message.author.displayAvatarURL({ format: 'png' , size : 2048 })

  const avatar = await Canvas.loadImage(memberLogo);
  ctx.drawImage(avatar , 250, 0, 500, 500);

  const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/802855640632524803/809025432284299284/door.png')
  ctx.drawImage(background, 0, 0 ,canvas.width , canvas.height);

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  message.channel.send(attachment)

    }
}
exports.default = UlgyCommand;
