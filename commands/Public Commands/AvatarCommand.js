"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class AvatarCommand extends discord_akairo_1.Command {
    constructor() {
        super("avatar", {
            aliases: ['avatar', 'av'],
            category: 'Public Commands',
            description: {
                content: 'Display the avatar of a member',
                usage: 'avatar [member]',
                examples: [
                    'avatar',
                    'avatar @Member#0001',
                    'avatar member'
                ]
            },
            ratelimit: 3,
            args: [
                {
                    id: 'member',
                    type: 'member',
                    match: 'rest',
                    default: (message) => message.member
                },
                {
                    id: 'size',
                    type: (_, str) => {
                        if (str && !isNaN(Number(str)) && [16, 32, 64, 128, 256, 512, 1024, 2048].includes(Number(str)))
                            return Number(str);
                        return null;
                    },
                    match: 'option',
                    flag: ['-size='],
                    default: 2048
                }
            ]
        });
    }
    exec(message, { member, size }) {
        let embed = new discord_js_1.MessageEmbed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL())
            .setColor('RANDOM')
            .setImage(member.user.displayAvatarURL({ size: size }));
        return message.util.send(embed);
    }
}
exports.default = AvatarCommand;
