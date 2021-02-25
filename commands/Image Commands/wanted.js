"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas'); 
class WantedCommand extends discord_akairo_1.Command {
    constructor() {
        super('wanted', {
            aliases: ['wanted'],
            category: 'Image Commands',
            description: {
                content: 'Makes a wanted using your text.',
                usage: 'wanted',
                examples: [
                    'wanted You are a big Fool'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {

  const canvas = Canvas.createCanvas( 626 , 876);
  const ctx = canvas.getContext('2d')

  const memberLogo = message.mentions.users.first()
  ? message.mentions.users.first().displayAvatarURL({ format: 'jpg' })
  : message.author.displayAvatarURL({ format: 'jpg' })

  const background = await Canvas.loadImage('https://image.freepik.com/free-vector/wanted-vintage-western-poster_176411-3.jpg')
  ctx.drawImage(background, 0, 0 ,canvas.width , canvas.height);

  ctx.strokeStyle = '#740';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  const avatar = await Canvas.loadImage(memberLogo);
  ctx.drawImage(avatar , 165, 265, 300, 300);

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  message.channel.send(attachment)

    }
}
exports.default = WantedCommand;
