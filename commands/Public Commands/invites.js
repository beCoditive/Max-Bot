"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require("discord.js")
const config_1 = require("../../config");
class HighlightCommand extends discord_akairo_1.Command {
    constructor() {
        super('invites', {
            aliases: ['invites'],
            category: 'Public Commands',
            description: {
                content: 'Make Your Text invitesed.',
                usage: 'invites <Text>',
                examples: [
                    'invites I am max bot.'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       let invites = await message.guild.fetchInvites();

        // Get array of invites made by message author user
        const userInvites = invites.array().filter(e => e.inviter.id == message.author.id);

        // Make a var to save count of the user invites
        let inviteCount = 0;

        // Loop through each invite and add the uses of the invite to the "inviteCount" variable.
        userInvites.forEach(invite => inviteCount += invite.uses);

        let embed = new Discord.MessageEmbed()
        .setTitle(':incoming_envelope: Invites')
        .setColor('RANDOM')
        .setDescription(`${message.author.tag} has ${inviteCount} Invites`)
        .setFooter(`Max Bot ${config_1.version} | © beCoditive Inc.`)

        message.channel.send(embed);

    }
}
exports.default = HighlightCommand;
