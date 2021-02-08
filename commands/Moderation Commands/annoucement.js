"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Warns_1 = require("../../models/Warns");const Discord = require('discord.js')
class WarnCommand extends discord_akairo_1.Command {
    constructor() {
        super('annoucement', {
            aliases: ['annoucement'],
            category: 'Moderation Commands',
            description: {
                content: 'Makes a annoucement in the annoucement channel',
                usage: 'annoucement <Channel> Description',
                examples: [
                    'annoucement #annoucements This is a test annoucement'
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
        let annoucementChannel = channel
        let annoucementDescription = reason

        if(annoucementDescription.length >= 256) return message.channel.send('Please describe Your Annoucement in 256 or less words.')

        let embedAnnoucement = new Discord.MessageEmbed()
        .setTitle(`${annoucementDescription}`)
        .setColor('RANDOM')
        .setTimestamp(new Date())

        let msgEmbed = await annoucementChannel.send(embedAnnoucement)

    }
}
exports.default = WarnCommand;
