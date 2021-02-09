"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas'); 
class YoutubeCommand extends discord_akairo_1.Command {
    constructor() {
        super('youtube', {
            aliases: ['youtube'],
            category: 'Fun Commands',
            description: {
                content: 'Makes a youtube Comment using your text.',
                usage: 'youtube',
                examples: [
                    'youtube Hi i am your big fan.'
                ]
            },
             args: [
                {
                    id: 'text',
                    type: 'text',
                    prompt: {
                        start: (message) => `Please provide a text to Comment.`,
                    }
                },
            ],
            ratelimit: 10
        });
    }
    async exec(message , args) {
ś

  const comment = message.content.split('$youtube ').join(' ');

  const canvas = Canvas.createCanvas(720 ,300);
  const ctx = canvas.getContext('2d')

  const background = await Canvas.loadImage('https://media.discordapp.net/attachments/802588332809781278/804985083924054036/Untitled-1.png?width=826&height=307')
  ctx.drawImage(background, 0, 0 ,canvas.width , canvas.height);

  ctx.strokeStyle = '#740';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  const userName = message.member.displayName

  ctx.font = '22px valorant'
  ctx.fillStyle = '#000000';
  ctx.fillText(userName, 140 , 80);

    var min = 1;
    var max = 55;
    var num1 = Math.floor(Math.random() * (max - min + 1)) + min;

  ctx.font = '22px sans-serif'
  ctx.fillStyle = '#808080';
  ctx.fillText(`${num1} minutes ago`, 260 , 80);

  ctx.font = '25px valorant'
  ctx.fillStyle = '#444';
  ctx.fillText(`${comment}`, 140 , 120);

  var min1 = 100;
  var max1 = 999;
  var num2 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;

  ctx.font = '25px sans-serif'
  ctx.fillStyle = '#808080';
  ctx.fillText(`${num2}`, 200 , 205);

  var min2 = 10;
  var max2 = 50;
  var num3 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;

  ctx.font = '20px valorant'
  ctx.fillStyle = '#808080';
  ctx.fillText(`${num3}`, 180 , 260);

  const avatar = await Canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg' }));

  ctx.beginPath();
  ctx.arc(70, 70, 50, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  ctx.drawImage(avatar , 20, 20, 100, 100);


  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  message.channel.send(attachment)

    }
}
exports.default = YoutubeCommand;
