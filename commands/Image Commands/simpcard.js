"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const Canvas = require('canvas')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('simpcard', {
            aliases: ['simpcard'],
            category: 'Image Commands',
            description: {
                content: 'Generate a simpcard image of some user.',
                usage: 'simpcard <User>',
                examples: [
                    'simpcard @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
        const memberLogo = message.mentions.users.first()
        ? message.mentions.users.first().displayAvatarURL({ format: 'png' , size : 2048 })
        : message.author.displayAvatarURL({ format: 'png' , size : 2048 })

        const canvas = Canvas.createCanvas(775 , 575);
        const ctx = canvas.getContext('2d')
      
        const background = await Canvas.loadImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eccecf5b-58df-4fb5-b1ca-a55568933bb6/deayo0r-a2ed7e18-6a37-403a-a0a6-420ae5b4e6c3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZWNjZWNmNWItNThkZi00ZmI1LWIxY2EtYTU1NTY4OTMzYmI2XC9kZWF5bzByLWEyZWQ3ZTE4LTZhMzctNDAzYS1hMGE2LTQyMGFlNWI0ZTZjMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.2pqto2H8uweuOoUnQ14hJsVAHw0j8MARcx6szHIusJg')
        ctx.drawImage(background, 0, 0 ,canvas.width , canvas.height);
      
        ctx.strokeStyle = '#740';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
      
        const avatar = await Canvas.loadImage(memberLogo);
        ctx.drawImage(avatar , 60 , 100, 255, 390);
      
        let RandomNo = Math.floor(Math.random() * 3000000)
        ctx.font = '40px sans-serif'
        ctx.fillStyle = '#808080';
        ctx.fillText(RandomNo, 480 , 480);

  

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        message.channel.send(attachment)
      
    }
}
exports.default = ripCommand;
