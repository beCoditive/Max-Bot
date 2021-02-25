"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')

const meme = require("random-jokes-api")

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
       
        const shower = meme.showerThought()

        const Embed = new Discord.MessageEmbed()
             .setDescription(shower)
             .setColor('RANDOM')
        message.channel.send(Embed)
    }
}
exports.default = jokeCommand;
