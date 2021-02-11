"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const giphy = require('quick-giphy')
class gifCommand extends discord_akairo_1.Command {
    constructor() {
        super('gif', {
            aliases: ['gif'],
            category: 'Fun Commands',
            description: {
                content: 'Sends the user a gif',
                usage: 'gif',
                examples: [
                    'gif'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
        let gif = await message.content.slice(5)
        if(!gif) return message.channel.send('What gif lol') 
        giphy({apiKey: 'MK9cZhCyxYOJ4f2ThHEUgA2Iqk4FcZ4O', query: gif})
        .then(url => {
           message.channel.send(url);
        })
    }
}
exports.default = gifCommand;
