"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Warns_1 = require("../../models/Warns");const Discord = require('discord.js')
class WarnCommand extends discord_akairo_1.Command {
    constructor() {
        super('poll', {
            aliases: ['poll'],
            category: 'Moderation Commands',
            description: {
                content: 'Makes a poll in the poll channel',
                usage: 'poll <Channel> Description',
                examples: [
                    'poll #polls This is a test poll'
                ]
            },
            args: [
                {
                    id: 'channel',
                    type: 'channel',
                    prompt: {
                        start: (message) => `Please provide a channel to send a poll.`,
                        retry: (message) => `Please provide a valid channel to send a poll.`
                    }
                },
                {
                    id: 'reason',
                    type: 'string',
                    match: 'rest',
                    prompt: {
                        start: (message) => `Please provide a Description for the poll.`,
                    }
                }
            ],
            ratelimit: 3
        });
    }
    async exec(message, {channel , reason}) {
        if (!message.member.permissions.has('ADMINISTRATOR'))
        return message.channel.send('You need to have the `ADMINISTRATOR` permission to use this command.');
        let pollChannel = channel
        let pollDescription = reason

        if(pollDescription.length >= 256) return message.channel.send('Please describe Your Poll in 256 or less words.')

        let embedPoll = new Discord.MessageEmbed()
        .setTitle(`${pollDescription}`)
        .setColor('RANDOM')
        .setTimestamp(new Date())

        let msgEmbed = await pollChannel.send(embedPoll)

        await msgEmbed.react('❌')
        await msgEmbed.react('✔')

    }
}
exports.default = WarnCommand;
