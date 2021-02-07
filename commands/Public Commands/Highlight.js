"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super('highlight', {
            aliases: ['highlight'],
            category: 'Public Commands',
            description: {
                content: 'Make Your Text Highlighted.',
                usage: 'highlight <Text>',
                examples: [
                    'highlight I am max bot.'
                ]
            },
            ratelimit: 3
        });
    }
    exec(message , args) {
        const reason = message.content.slice(11)
        if(!reason) return message.channel.send('Please Specify Text To Highlight');
        let description = reason   
        message.channel.send("```css\n" + `${description}\n` + "```" )
 
    }
}
exports.default = PingCommand;
