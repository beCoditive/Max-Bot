
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class DankRateCommand extends discord_akairo_1.Command {
    constructor() {
        super('rps', {
            aliases: ['rps'],
            category: 'Fun Commands',
            description: {
                content: 'Gives you your Dank rate.',
                usage: 'rps',
                examples: [
                    'rps'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
       let errorMsg = "```fix\nSyntax: $rps = <your_choice>\n\nyour_choice is a required argument that is missing.```"
         
       let answerUser = message.content.slice(5)

       if(!answerUser) return message.channel.send(errorMsg)
       
       let outcomes = ['rock' , 'paper' , 'scissors']

       let answer = Math.floor(Math.random() * outcomes.length)

       let possibleAnswer = ['rock' , 'paper' , 'scissors']

       if(!possibleAnswer.includes(answerUser.toLowerCase())) return message.channel.send("This isn't a valid option. Try rock, paper, or scissors.")

       let emoji

       if(outcomes[answer].toLowerCase() === 'rock'){
           emoji = '🗿'
       }
       else if(outcomes[answer].toLowerCase() === 'paper'){
        emoji = '📜'
       }
       else if(outcomes[answer].toLowerCase() === 'scissors'){
            emoji = '✂'
       }

       if(outcomes[answer].toLowerCase() === answerUser.toLowerCase()) {
           message.channel.send(`${emoji} You won <@${message.author.id}>`)
       }
       else if(outcomes[answer].toLowerCase() != answerUser.toLowerCase()) {
        message.channel.send(`${emoji} You lost <@${message.author.id}>`)
    }
    
    }

}
exports.default = DankRateCommand;
