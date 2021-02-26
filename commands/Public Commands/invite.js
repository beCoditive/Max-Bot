"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require("discord.js")
const config_1 = require("../../config");
class InfoCommand extends discord_akairo_1.Command {
    constructor() {
        super('invite', {
            aliases: ['invite'],
            category: 'Public Commands',
            description: {
                content: 'Bot invite link.',
                usage: 'invite',
                examples: [
                    'invite'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message) {
        const embed = await new Discord.MessageEmbed()
          .setAuthor(`Max Memer ${config_1.version}` , this.client.user.displayAvatarURL())
          .setColor('RANDOM')
          .setThumbnail('https://cdn.discordapp.com/emojis/813674145560002601.png?v=1')
          .setDescription("Are you going to add the bot or??")
          .addField('**Bot Invite**' , `[Add the Bot](${config_1.inviteLink})`, true)
          .addField('**Support Server**' , `[Get Support](${config_1.serverLink})`, true)
          .setFooter('Copyright © 2021 beCoditive ')

          message.channel.send(embed)
    }
}
exports.default = InfoCommand;
