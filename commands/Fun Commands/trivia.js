"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const meme = require("random-jokes-api")
class TriviaCommand extends discord_akairo_1.Command {
    constructor() {
        super('trivia', {
            aliases: ['trivia'],
            category: 'Fun Commands',
            description: {
                content: 'Test Your Knowledge by A Quiz',
                usage: 'trivia',
                examples: [
                    'trivia'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
      
        let i = 0

        let trivia = meme.trivia();

        const Embed = new Discord.MessageEmbed()
             .setTitle(trivia.question)
             .setDescription(trivia.options.map(opt=>{
                i++;
                return `${i} - ${opt}\n`
             }))
             .setColor('RANDOM')
             .setFooter(`Category: ${trivia.category} | Difficulty : ${trivia.difficulty}`)
             message.channel.send(Embed)
            try{
                let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id,{ time: 15000, max: 1, errors: ["time"] })
                 if(parseInt(msgs.first().content)==trivia.correct_option){
                     return message.channel.send('Bingo! You got it correct!')
                 }else{
                    return message.channel.send(`Oh No! Incorrect Answer. Write Answer Was ` + '`' +`${trivia.answer}`+ '`')
                 }
            }catch(e){
                console.log(e)
                return message.channel.send("Time's Up. Try Again")
            }
    }
}
exports.default = TriviaCommand;
