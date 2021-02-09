"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
let jokes  = require('../../joke_list').jokes;
class imagineCommand extends discord_akairo_1.Command {
    constructor() {
        super('imagine', {
            aliases: ['imagine'],
            category: 'Fun Commands',
            description: {
                content: 'imagine something',
                usage: 'imagine <Text>',
                examples: [
                    'imagine Hmmmm.'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
        const text = await message.content.slice(9)
        if(!text) return message.channel.send('What to imagine LOL.')

        let user = await message.author.tag.split('#')[0]

        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`imagine ${text}`)
        .setFooter(`${user} is trying really hard to imagine`)

        message.channel.send(embed)
    }
}
exports.default = imagineCommand;
