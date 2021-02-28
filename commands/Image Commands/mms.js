"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const DIG = require("discord-image-generation");
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('mms', {
            aliases: ['mms'],
            category: 'Image Commands',
            description: {
                content: 'Generate a mms image of some user.',
                usage: 'mms <User>',
                examples: [
                    'mms @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
    const memberLogo = message.mentions.users.first()
    ? message.mentions.users.first().displayAvatarURL({ format: 'png' , size: 2048 })
    : message.author.displayAvatarURL({ format: 'png' ,  size: 2048 })
    
    let img = await new DIG.Mms().getImage(memberLogo);
    let attach = new Discord.MessageAttachment(img, "delete.gif");;
    
    message.channel.send(attach)
      
    }
}
exports.default = ripCommand;
