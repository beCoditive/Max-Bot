const Chuck  = require('chucknorris-io'),
   chunk = new Chuck();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
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
        chunk.getRandomJoke().then(function (response) {
            let embed = new Discord.MessageEmbed()
            .setTitle('👊Chuck Norris👊')
            .setColor('RANDOM')
            .setDescription(response.value)
            message.channel.send(embed)
        }).catch(function (err) {
            console.log(err)
        });
    }
}
exports.default = PrequelCommand;
