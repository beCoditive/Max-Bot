"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas'); 
class UlgyCommand extends discord_akairo_1.Command {
    constructor() {
        super('ugly', {
            aliases: ['ugly'],
            category: 'Image Commands',
            description: {
                content: 'Makes a ugly using your text.',
                usage: 'ugly',
                examples: [
                    'ugly You are a big Fool'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {

  const canvas = Canvas.createCanvas( 300 , 209);
  const ctx = canvas.getContext('2d')

  const background = await Canvas.loadImage('https://pics.me.me/thumb_its-even-uglier-up-close-alien-covenant-2017-42667490.png')
  ctx.drawImage(background, 0, 0 ,canvas.width , canvas.height);

  ctx.strokeStyle = '#740';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  const avatar = await Canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg' }));
  ctx.drawImage(avatar , 65, 25, 70, 70);

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  message.channel.send(attachment)

    }
}
exports.default = UlgyCommand;
