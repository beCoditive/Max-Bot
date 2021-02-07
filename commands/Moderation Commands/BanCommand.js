"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class BanCommand extends discord_akairo_1.Command {
    constructor() {
        super('ban', {
            aliases: ['ban'],
            category: 'Moderation Commands',
            description: {
                content: 'Bans a member from the guild.',
                usage: 'ban [member] <reason>',
                examples: [
                    'ban @Member#0001',
                    'ban @Member#0001 spam'
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
            ratelimit: 3
        });
    }
    async exec(message, { member, reason }) {
        if (!message.member.permissions.has('BAN_MEMBERS'))
            return message.channel.send('You need to have the `Ban Members` permission to use this command.');
        if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.ownerID)
            return message.channel.send('You do not have permission to ban this member.');
        await member.ban({ reason: reason });
        return message.util.send(`ban ${member}`);
    }
}
exports.default = BanCommand;
