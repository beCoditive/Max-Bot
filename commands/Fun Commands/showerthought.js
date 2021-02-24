"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
let jokes  = require('../../shower_list').list;
class jokeCommand extends discord_akairo_1.Command {
    constructor() {
        super('showerthoughts', {
            aliases: ['showerthoughts'],
            category: 'Fun Commands',
            description: {
                content: 'Tells a showerthoughts to the user.',
                usage: 'showerthoughts',
                examples: [
                    'showerthoughts'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
        let q = jokes[Math.floor(Math.random() * jokes.length)]
        let i = 0;
        const Embed = new Discord.MessageEmbed()
             .setDescription(q.title)
             .setColor('RANDOM')
        message.channel.send(Embed)
    }
}
exports.default = jokeCommand;
