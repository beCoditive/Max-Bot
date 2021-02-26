"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const Canvas = require('canvas')
class ripCommand extends discord_akairo_1.Command {
    constructor() {
        super('banner', {
            aliases: ['banner'],
            category: 'Image Commands',
            description: {
                content: 'Generate a banner image of some user.',
                usage: 'banner <User>',
                examples: [
                    'banner @user'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {    
        const memberLogo = message.mentions.users.first()
        ? message.mentions.users.first().displayAvatarURL({ format: 'jpg' })
        : message.author.displayAvatarURL({ format: 'png' })

        const canvas = Canvas.createCanvas(489 , 481);
        const ctx = canvas.getContext('2d')

        const background = await Canvas.loadImage('./Assets/Images/banner.png')
        ctx.drawImage(background, 0, 0 ,canvas.width , canvas.height);

        ctx.strokeStyle = '#740';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        const avatar1 = await Canvas.loadImage(memberLogo);
        ctx.rotate(-8 * Math.PI / 180);
        ctx.drawImage(avatar1 , 5 , 284, 110, 110);

        const avatar2 = await Canvas.loadImage(memberLogo);
        ctx.drawImage(avatar2 , 440 , 105 , 110, 110);

        const avatar3 = await Canvas.loadImage(memberLogo);
        ctx.drawImage(avatar3 , 305 , 305 , 110, 110);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        message.channel.send(attachment)     
    }
}
exports.default = ripCommand;
