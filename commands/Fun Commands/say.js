"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class MemeCommand extends discord_akairo_1.Command {
    constructor() {
        super('say', {
            aliases: ['say'],
            category: 'Fun Commands',
            description: {
                content: 'Repeats What you say.',
                usage: 'say',
                examples: [
                    'say'
                ]
            },
            ratelimit: 3
        });
    }
    async exec(message , args) {
       const say = await message.content.slice(5)
       if(!say) return message.channel.send('What do you want me to say?')

       message.channel.send(`${say}\n\n\n - **${message.author.tag}**`)
    }
}
exports.default = MemeCommand;
