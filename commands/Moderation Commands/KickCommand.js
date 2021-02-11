"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const config = require("../../config")
const discord = require('discord.js')
class KickCommand extends discord_akairo_1.Command {
    constructor() {
        super('kick', {
            aliases: ['kick'],
            category: 'Moderation Commands',
            description: {
                content: 'Kicks a member from the guild.',
                usage: 'kick [member] <reason>',
                examples: [
                    'kick @Member#0001',
                    'kick @Member#0001 spam'
                ]
            },
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
            ],
            ratelimit: 10
        });
    }
    async exec(message, { member, reason }) {
        if (!message.member.permissions.has('KICK_MEMBERS'))
            return message.channel.send('You need to have the `Kick Members` permission to use this command.');
        if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.ownerID)
            return message.channel.send('You do not have permission to kick this member.');
        await member.kick(reason);
        const embed = await new discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Member Kicked!')
        .setDescription(`Member Kicked: ${member.user.tag}\n\n Kicked By: <@${message.author.id}>\n\nReason: ${reason}`)
        const chan = this.client.channels.cache.find(c => c.id === `${config.logsChannel}`)
        await chan.send(embed)

        return message.util.send(`kicked ${member}`);
    }
}
exports.default = KickCommand;
