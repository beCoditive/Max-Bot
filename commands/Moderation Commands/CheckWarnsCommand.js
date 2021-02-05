"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const Warns_1 = require("../../models/Warns");
class CheckWarnsCommand extends discord_akairo_1.Command {
    constructor() {
        super('checkwarns', {
            aliases: ['checkwarns', 'warns'],
            category: 'Moderation Commands',
            description: {
                content: 'Check number of warnings of a specific member',
                usage: 'checkwarns [member]',
                examples: [
                    'checkwarns @Member#0001',
                    'checkwarns member'
                ]
            },
            ratelimit: 3,
            userPermissions: ['MANAGE_MESSAGES'],
            args: [
                {
                    id: 'member',
                    type: 'member',
                    default: (message) => message.member
                }
            ]
        });
    }
    async exec(message, { member }) {
        const warnRepo = this.client.db.getRepository(Warns_1.Warns);
        const warns = await warnRepo.find({ user: member.id, guild: message.guild.id });
        if (!warns.length)
            return message.channel.send('This user has no warnings logged.');
        const infractions = await Promise.all(warns.map(async (v, i) => {
            const mod = await this.client.users.fetch(v.moderator).catch(() => null);
            if (mod)
                return {
                    index: i + 1,
                    moderator: mod.tag,
                    reason: v.reason
                };
        }));
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setColor('RANDOM')
            .setDescription(infractions.map(v => `\`Warn ${v.index}\` | **Moderator**: ${v.moderator}\n**Reason:** ${v.reason}`));
        message.channel.send(embed);
    }
}
exports.default = CheckWarnsCommand;
