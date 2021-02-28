"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require("discord.js")
const config_1 = require("../../config");
class InfoCommand extends discord_akairo_1.Command {
    constructor() {
        super('serverinfo', {
            aliases: ['serverinfo'],
            category: 'Public Commands',
            description: {
                content: 'Bot serverinfo link.',
                usage: 'serverinfo',
                examples: [
                    'serverinfo'
                ]
            },
            ratelimit: 10
        });
    }
    exec(message) {
        let serverName = message.guild.name
        let serverOwner = message.guild.owner
        let textChannels = message.guild.channels.cache.filter((c) => c.type === "text").size;
        let voiceChannels = message.guild.channels.cache.filter((c) => c.type === "voice").size;
        let TotalMembers = message.guild.memberCount
        let HumanMember = message.guild.members.cache.filter(member => !member.user.bot).size;
        let BotMember = message.guild.members.cache.filter(member => member.user.bot).size;
        let rolesCount = message.guild.roles.cache.size
        let emojis = message.guild.emojis.cache.size
        let verificationLevel = message.guild.verificationLevel
        let region = message.guild.region
        let serverLogo = message.guild.iconURL()
        const embed = new Discord.MessageEmbed()
        .setTitle(`Info for ${serverName}`)
        .setThumbnail(serverLogo)
        .addField('Owner' , `${serverOwner}` , true)
        .addField('Owner' , `${textChannels} Text Channels\n${voiceChannels} Voice Channels` , true)
        .addField('Members' , `Total : ${TotalMembers}\nHumans : ${HumanMember}\nBots : ${BotMember}` , true)
        .addField('Roles' , `${rolesCount} Roles` , true)
        .addField('Emojis' , `${emojis} Emojis` , true)
        .addField('Info' , `Verification Level : ${verificationLevel}\n Voice Region : ${region}` , true)

        message.channel.send(embed)
    }
}
exports.default = InfoCommand;
