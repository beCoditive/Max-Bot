"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
class TriviaCommand extends discord_akairo_1.Command {
    constructor() {
        super('8ball', {
            aliases: ['8ball'],
            category: 'Fun Commands',
            description: {
                content: 'Ask your question and check your fortune.',
                usage: '8ball',
                examples: [
                    '8ball'
                ]
            },
            ratelimit: 3
        });
    }
    async exec(message , args) {
       let question = message.content.slice(7)
       if(!question) return message.channel.send('Please ask a Full Question')

       let answers = ['Yes' , 'No' , 'Why Not' , 'Not in a million Years' , 'No Comments' , 'Definetly']

       let response = answers[Math.floor(Math.random() * answers.length)]
       let Embed = new MessageEmbed()
       .setTitle('8ball!')
       .setColor('RANDOM')
       .setDescription(`Your Question: ${question}\nMy Reply: ${response}`)
       message.channel.send(Embed)
    }
}
exports.default = TriviaCommand;
