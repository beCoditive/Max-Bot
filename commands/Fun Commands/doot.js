"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class jokeCommand extends discord_akairo_1.Command {
    constructor() {
        super('doot', {
            aliases: ['doot'],
            category: 'Fun Commands',
            description: {
                content: 'Tells a doot to the user.',
                usage: 'doot',
                examples: [
                    'doot'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       const doottext = message.content.slice(6)

       if(!doottext) return message.channel.send('What do you want me to doot ? lol')

       const emojis = '`💀🎺`'

       message.channel.send(`${emojis}` + doottext + `${emojis}`)
    }
}
exports.default = jokeCommand;
