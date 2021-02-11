"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require("discord.js")
const config_1 = require("../../config");
class InfoCommand extends discord_akairo_1.Command {
    constructor() {
        super('info', {
            aliases: ['info'],
            category: 'Public Commands',
            description: {
                content: 'Bot Info.',
                usage: 'info',
                examples: [
                    'info'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message) {
        const embed = await new Discord.MessageEmbed()
          .setTitle(`Max Bot ${config_1.version}`)
          .setColor('RANDOM')
          .setThumbnail('https://cdn.discordapp.com/attachments/803548530932318209/807894212388847636/post-1.png')
          .setDescription('Max Bot is Open Source Bot made by beCoditive using nodejs and npm package discord.js')
          .addField('Get This Bot for your server.' , 'https://github.com/beCoditive/Max-Bot')
          .addField('This Bot Was Made by:' , 'beCoditive Inc. - https://github.com/beCoditive\nShuriken - https://github.com/CyberShuri')
          .addField(`Version` , `${config_1.version}`)
          .addField('Features:' , '`fun commands` , `moderation commands` , `search commands` , `public commands`')
          .setFooter('Copyright © 2021 beCoditive ')

          message.channel.send(embed)
    }
}
exports.default = InfoCommand;
