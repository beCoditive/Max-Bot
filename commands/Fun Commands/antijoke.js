"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
let jokes  = require('../../anti_jokes').jokes;
class jokeCommand extends discord_akairo_1.Command {
    constructor() {
        super('antijoke', {
            aliases: ['antijoke'],
            category: 'Fun Commands',
            description: {
                content: 'Tells a antijoke to the user.',
                usage: 'antijoke',
                examples: [
                    'antijoke'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
        let q = jokes[Math.floor(Math.random() * jokes.length)]
        let i = 0;
        const Embed = new Discord.MessageEmbed()
             .setTitle(q.title)
             .setColor('RANDOM')
             message.channel.send(Embed)
    }
}
exports.default = jokeCommand;
