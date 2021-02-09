"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord = require("discord.js")
class WarnCommand extends discord_akairo_1.Command {
    constructor() {
        super('warn', {
            aliases: ['warn'],
            category: 'Moderation Commands',
            description: {
                content: 'Warn a member in the server',
                usage: 'warn [member] <reason>',
                examples: [
                    'warn @Member#0001 swearing',
                    'warn @Member#0001'
                ]
            },
            ratelimit: 10,
            userPermissions: ['MANAGE_MESSAGES'],
            args: [
                {
                    id: 'member',
                    type: 'member',
                    prompt: {
                        start: (message) => `Please provide a member to warn.`,
                        retry: (message) => `Please provide a valid member to warn.`
                    }
                },
                {
                    id: 'reason',
                    type: 'string',
                    match: 'rest',
                    default: 'No reason provided'
                }
            ]
        });
    }
    async exec(message, { member, reason }) {
        if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.ownerID)
            return message.channel.send('You do not have permission to warn this member.');
            const embed = await new discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('Member Warned!')
            .setDescription(`Member Warned: ${member.user.tag}\n\n Warned By: <@${message.author.id}>\n\nReason: ${reason}\n\n----------------------------`)
            .setFooter('If this happens again some serious action could be took against you!')
            await member.send(embed)
        return message.util.send(`\n\nMember **${member.user.tag}** warned succesfully for => \`${reason}\``);
    }
}
exports.default = WarnCommand;
