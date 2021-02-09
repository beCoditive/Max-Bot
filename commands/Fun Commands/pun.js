"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
let jokes  = require('../../pun_list').jokes;
class punCommand extends discord_akairo_1.Command {
    constructor() {
        super('pun', {
            aliases: ['pun'],
            category: 'Fun Commands',
            description: {
                content: 'Tells a pun to the user.',
                usage: 'pun',
                examples: [
                    'pun'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
        let q = jokes[Math.floor(Math.random() * jokes.length)]
        const Embed = new Discord.MessageEmbed()
             .setTitle(q.title)
             .setColor('RANDOM')
             message.channel.send(Embed)
    }
}
exports.default = punCommand;
