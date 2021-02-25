
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");

const meme = require("random-jokes-api")

class useLessWebCommand extends discord_akairo_1.Command {
    constructor() {
        super('uselessweb', {
            aliases: ['uselessweb'],
            category: 'Fun Commands',
            description: {
                content: 'Gives you the links of Useless Website.',
                usage: 'uselessweb',
                examples: [
                    'uselessweb'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , text) {
       
        let web = meme.uselessweb()

        message.channel.send(web)
    }
}
exports.default = useLessWebCommand;
