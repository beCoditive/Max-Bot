"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const Canvas = require('canvas'); 
class TweetCommand extends discord_akairo_1.Command {
    constructor() {
        super('tweet', {
            aliases: ['tweet'],
            category: 'Fun Commands',
            description: {
                content: 'Makes a tweet using your text.',
                usage: 'tweet',
                examples: [
                    'tweet You are a big Fool'
                ]
            },
             args: [
                {
                    id: 'text',
                    type: 'text',
                    prompt: {
                        start: (message) => `Please provide a text to tweet.`,
                    }
                },
            ],
            ratelimit: 10
        });
    }
    async exec(message , args) {

// Welcome Message

  const tweet1 = message.content.split('$tweet ').join(' ');

  const canvas = Canvas.createCanvas(1024 ,500);
  const ctx = canvas.getContext('2d')

  const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/802855640632524803/804958396926263296/Untitled-1.png')
  ctx.drawImage(background, 0, 0 ,canvas.width , canvas.height);

  ctx.strokeStyle = '#740';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  const avatar = await Canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg' }));
  ctx.drawImage(avatar , 25, 25, 100, 100);

  const userName = message.member.displayName

  ctx.font = '30px valorant'
  ctx.fillStyle = '#000000';
  ctx.fillText(userName, 140 , 60);

  ctx.font = '25px sans-serif'
  ctx.fillStyle = '#808080';
  ctx.fillText(`@${userName}`, 140 , 95);

  ctx.font = '40px valorant'
  ctx.fillStyle = '#000';
  ctx.fillText(`${tweet1}`, 30 , 195);

  var d = new Date,
    dformat = [d.getMonth()+1,
    d.getDate(),
    d.getFullYear()].join('/')+'       '+
    [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':');


    ctx.font = '20px valorant'
    ctx.fillStyle = '#808080';
    ctx.fillText(`${dformat}`, 30 , 485);

    var min = 10000;
    var max = 99999;
    var num = Math.floor(Math.random() * (max - min + 1)) + min;

    ctx.font = '15px valorant'
    ctx.fillStyle = '#808080';
    ctx.fillText(`${num}`, 30 , 450);

    var min2 = 10000;
    var max2 = 99999;
    var num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    ctx.font = '15px valorant'
    ctx.fillStyle = '#808080';
    ctx.fillText(`${num2}`, 145 , 450);

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  message.channel.send(attachment)

    }
}
exports.default = TweetCommand;
