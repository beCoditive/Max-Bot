"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
let questions  = require('../../trivia_questions').q_list
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
            ratelimit: 3
        });
    }
    async exec(message , args) {
        let q = questions[Math.floor(Math.random() * questions.length)]
        let i = 0;
        const Embed = new Discord.MessageEmbed()
             .setTitle(q.title)
             .setDescription(q.options.map(opt=>{
                i++;
                return `${i} - ${opt}\n`
             }))
             .setColor('RANDOM')
             .setFooter('Give Correct Answer within 15 Secs ')
             message.channel.send(Embed)
            try{
                let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id,{ time: 15000, max: 1, errors: ["time"] })
                 if(parseInt(msgs.first().content)==q.correct){
                     return message.channel.send('Bingo! You got it correct!')
                 }else{
                    return message.channel.send(`Oh No! Incorrect Answer. Write Answer Was ${q.correct}`)
                 }
            }catch(e){
                console.log(e)
                return message.channel.send("Time's Up. Try Again")
            }
    }
}
exports.default = TriviaCommand;
