"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const discord_akairo_1 = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')

class ballCommand extends discord_akairo_1.Command {
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
            ratelimit: 10
        });
    }
    async exec(message , args) {
       let question = message.content.slice(7)
       if(!question) return message.channel.send('Please ask a Full Question')

       let answers = [
           'It is certain',
           'It is decidedly so',
           'Without a doubt',
           'Yes – definitely',
           'You may rely on it',
           'As I see it, yes',
           'Most likely',
           'Outlook good',
           'Yes',
           'Signs point to yes',
           'Reply hazy, try again',
           'Ask again later',
           'Better not tell you now',
           'Cannot predict now',
           'Concentrate and ask again',
           'Don\'t count on it',
           'My reply is no',
           'My sources say no',
           'Outlook not so good',
           'Very doubtful',
       ]

       let response = answers[Math.floor(Math.random() * answers.length)]

       let Embed = new MessageEmbed()
       .setColor('RANDOM')
       .setDescription(`🎱 <@${message.author.id}>, ${response}`)
       .setFooter(`Original Message: ${question}`)
       await message.channel.send(Embed)
    }
}
exports.default = ballCommand;