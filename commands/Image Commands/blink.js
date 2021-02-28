"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const DIG = require("discord-image-generation");
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('blink', {
            aliases: ['blink'],
            category: 'Image Commands',
            description: {
                content: 'Generate a blink image of some user.',
                usage: 'blink <User>',
                examples: [
                    'blink @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
    const memberLogo = message.mentions.users.first()
    ? message.mentions.users.first().displayAvatarURL({ format: 'png' , size: 2048 })
    : message.author.displayAvatarURL({ format: 'png' ,  size: 2048 })
    
    let img = await new DIG.Blink().getImage(memberLogo , 'https://cdn.discordapp.com/attachments/803548530932318209/807153318945619979/8d2d1c5e0ee9e5141f1fc51567dba572.jpg');
    let attach = new Discord.MessageAttachment(img, "delete.gif");;
    
    message.channel.send(attach)
      
    }
}
exports.default = ripCommand;
