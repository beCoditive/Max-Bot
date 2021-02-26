"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')

const meme = require("random-jokes-api")

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
        let anti = meme.antijoke()
        const Embed = new Discord.MessageEmbed()
             .setTitle('Here is a joke!')
             .setDescription(anti)
             .setColor('RANDOM')
             message.channel.send(Embed)
    }
}
exports.default = jokeCommand;
