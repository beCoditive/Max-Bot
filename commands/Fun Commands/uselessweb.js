
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
let Web  = require('../../uselesswebList').list;
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
        let uselessweb  = Web[Math.floor(Math.random() * Web.length)]
        message.channel.send(uselessweb.title)
    }
}
exports.default = useLessWebCommand;
