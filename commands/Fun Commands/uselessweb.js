
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
let Web  = require('../../uselesswebList').list;
class TriviaCommand extends discord_akairo_1.Command {
    constructor() {
        super('uselessweb', {
            aliases: ['uselessweb'],
            category: 'Fun Commands',
            description: {
                content: 'Gives you the links of Useless Website.',
                usage: 'uselessweb',
                examples: [
                    'uselessweb'
                ]
            },
            ratelimit: 3
        });
    }
    async exec(message , text) {
        let uselessweb  = Web[Math.floor(Math.random() * Web.length)]
        message.channel.send(uselessweb.title)
    }
}
exports.default = TriviaCommand;
