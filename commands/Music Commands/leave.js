"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class pollCommand extends discord_akairo_1.Command {
    constructor() {
        super('leave', {
            aliases: ['leave'],
            category: 'Moderation Commands',
            description: {
                content: 'leave Songs',
                usage: 'leave',
                examples: [
                    'leave'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message, {channel , reason}) {
        const vc = message.member.voice.channel
        if(!vc) return message.channel.send('You need to be in a voice channel to Remove me.');

        try{
            var connection = await vc.leave()
        }catch(e){
            return console.error(e)
        }
    }
}
exports.default = pollCommand;
