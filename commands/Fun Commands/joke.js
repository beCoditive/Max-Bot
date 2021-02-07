"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
let jokes  = require('../../joke_list').jokes;
class TriviaCommand extends discord_akairo_1.Command {
    constructor() {
        super('joke', {
            aliases: ['joke'],
            category: 'Fun Commands',
            description: {
                content: 'Tells a joke to the user.',
                usage: 'joke',
                examples: [
                    'joke'
                ]
            },
            ratelimit: 3
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
exports.default = TriviaCommand;
