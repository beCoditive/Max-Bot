"use strict";
const wiki = require('wikijs').default;
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const img = require("images-scraper")
class WikiCommand extends discord_akairo_1.Command {
    constructor() {
        super('wiki', {
            aliases: ['wiki'],
            category: 'Search Commands',
            description: {
                content: 'Get Images from wiki',
                usage: 'wiki <Topic>',
                examples: [
                    'wiki Microsoft'
                ]
            },
            ratelimit: 3,
            args: [
                {
                    id: 'search',
                    type: 'string',
                    match: 'rest',
                    default: ""
                }
            ]
        });
    }
    async exec(message , {search}) {
        const query = search
       if(!query) return message.channel.send('Please specify something to search') 
       wiki()
       .page(query)
       .then(page =>{ 
           const posts = page.url('alterEgo')
           message.channel.send(posts)
        })
    }

}
exports.default = WikiCommand;
