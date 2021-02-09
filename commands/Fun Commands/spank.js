

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas'); 
class spankCommand extends discord_akairo_1.Command {
    constructor() {
        super('spank', {
            aliases: ['spank'],
            category: 'Fun Commands',
            description: {
                content: 'Spanks You',
                usage: 'spank',
                examples: [
                    'spank '
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {

// Welcome Message

  const canvas = Canvas.createCanvas(800 , 769);
  const ctx = canvas.getContext('2d')

  const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/804927645824581652/808305226754424832/6LPDY6CH2HVNR4ELVHHVJBNRAY.jpg')
  ctx.drawImage(background, 0, 0 ,canvas.width , canvas.height);

  ctx.strokeStyle = '#740';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  const avatar = await Canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg' }));
  ctx.drawImage(avatar , 570 , 325, 200, 200);

  const avatar3 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/804927645824581652/808306781415669790/download.png');
  ctx.drawImage(avatar3 , 370 , 25, 200, 200);
   

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  message.channel.send(attachment)

    }
}
exports.default = spankCommand;
