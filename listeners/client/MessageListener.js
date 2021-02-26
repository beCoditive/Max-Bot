"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const fs_1 = require("fs");

class MessageListener extends discord_akairo_1.Listener {
    constructor() {
        super('message', {
            emitter: 'client',
            event: 'message',
            category: 'client'
        });
    }
    async exec(message) {
        const { filteredWords } = JSON.parse(fs_1.readFileSync('./data.json', 'utf8'));
        const invite = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|link|com)|discordapp\.com\/invite)\/.+[a-z]/i;
        if (invite.test(message.content)) {
            message.delete();
            const warning = await message.channel.send(`${message.author} | Please do not promote your server in the chat.`);
            warning.delete({ timeout: 4000 });
        }
        for (const word of message.content.trim().toLowerCase().split(' ')) {
            if (filteredWords.includes(word)) {
                message.delete();
                const warning = await message.channel.send(`${message.author} | Please refrain from using filtered words.`);
                warning.delete({ timeout: 4000 });
            }
        }
        
        if(message.content.startsWith('hi')) message.channel.send(`Hello <@${message.author.id}> , What's Up`)
         .then((mes) => {
            setTimeout(() => {
                mes.delete()
            } , 5000 )
        })
        if(message.content.startsWith('Hi')) message.channel.send(`Hello <@${message.author.id}> , What's Up`)
         .then((mes) => {
            setTimeout(() => {
                mes.delete()
            } , 5000 )
        })
        if(message.content.startsWith('hI')) message.channel.send(`Hello <@${message.author.id}> , What's Up`)
        .then((mes) => {
            setTimeout(() => {
                mes.delete()
            } , 5000 )
        })
        if(message.content.startsWith('HI')) message.channel.send(`Hello <@${message.author.id}> , What's Up`)
         .then((mes) => {
            setTimeout(() => {
                mes.delete()
            } , 5000 )
        })
    
        if(message.content === `<@!808612664786944000>`) {
            message.channel.send('My Prefix is `$` Use `$help` for help.')
        }

    }
}
exports.default = MessageListener;
