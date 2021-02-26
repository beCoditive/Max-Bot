
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const DIG = require("discord-image-generation");
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('presentation', {
            aliases: ['presentation'],
            category: 'Image Commands',
            description: {
                content: 'Generate a presentation image of some user.',
                usage: 'presentation <User>',
                examples: [
                    'presentation @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
        const text = message.content.slice(14)
        if(!text) return message.channel.send('Give some text for the presentation.')

        let img = await new DIG.LisaPresentation().getImage(text)

        let attach = new Discord.MessageAttachment(img, "delete.png");;
        
        message.channel.send(attach)
      
    }
}
exports.default = ripCommand;
