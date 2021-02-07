"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Warns_1 = require("../../models/Warns");
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
            ratelimit: 3,
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
        const warnRepo = this.client.db.getRepository(Warns_1.Warns);
        if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.ownerID)
            return message.channel.send('You do not have permission to warn this member.');
        await warnRepo.insert({
            guild: message.guild.id,
            user: member.id,
            moderator: message.author.id,
            reason: reason
        });
        return message.util.send(`Member **${member.user.tag}** warned succesfully for => \`${reason}\``);
    }
}
exports.default = WarnCommand;
