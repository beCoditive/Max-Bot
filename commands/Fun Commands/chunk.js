"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const meme = require('random-jokes-api');
class PrequelCommand extends discord_akairo_1.Command {
    constructor() {
        super('chucknorris', {
            aliases: ['chucknorris'],
            category: 'Fun Commands',
            description: {
                content: 'Generate chucknorris from public API',
                usage: 'chucknorris',
                examples: [
                    'chucknorris'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       
        let chunk = meme.chuckNorris()

        let embed = new Discord.MessageEmbed()
        .setTitle('👊Chuck Norris👊')
        .setColor('RANDOM')
        .setDescription(chunk)
        message.channel.send(embed)
    }
}
exports.default = PrequelCommand;
