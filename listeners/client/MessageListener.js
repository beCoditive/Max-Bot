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
            if(message.author.role === 'Partners') return;
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

    }
}
exports.default = MessageListener;
