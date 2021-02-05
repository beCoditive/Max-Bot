"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Warns_1 = require("../../models/Warns");
class WarnCommand extends discord_akairo_1.Command {
    constructor() {
        super('deletewarn', {
            aliases: ['deletewarn', 'delwarn'],
            category: 'Moderation Commands',
            description: {
                content: 'Remove a warning from a member',
                usage: 'deletewarn [member] <warning>',
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
                    id: 'warning',
                    type: 'number',
                    default: 1
                }
            ]
        });
    }
    async exec(message, { member, warning }) {
        const warnRepo = this.client.db.getRepository(Warns_1.Warns);
        if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.ownerID)
            return message.channel.send('You do not have permission to delete a warn from this member.');
        const warningsList = await warnRepo.find({ user: member.id });
        warnRepo.remove(warningsList[warning - 1]);
        return message.util.send(`Deleted warning ${warning} from member **${member.user.tag}**.`);
    }
}
exports.default = WarnCommand;
