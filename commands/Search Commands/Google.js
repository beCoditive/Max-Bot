"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const img = require("images-scraper")
class GoogleCommand extends discord_akairo_1.Command {
    constructor() {
        super('google', {
            aliases: ['google'],
            category: 'Search Commands',
            description: {
                content: 'Get Images from Google',
                usage: 'google <Topic>',
                examples: [
                    'google food'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
        const google = new img({
            puppeteer : {
                headless: true,
            }
        })

        const query = message.content.slice(8)
        if(!query) return message.channel.send('Please enter a search query')
        const results = await google.scrape(query , 1)
        message.channel.send(results[0].url)
    }
}
exports.default = GoogleCommand;
