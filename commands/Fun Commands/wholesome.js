"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const fetch = require('node-fetch')
class WholesomeCommand extends discord_akairo_1.Command {
    constructor() {
        super('wholesome', {
            aliases: ['wholesome'],
            category: 'Fun Commands',
            description: {
                content: 'Generate wholesomes from public API',
                usage: 'wholesome',
                examples: [
                    'wholesome'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
        fetch('https://meme-api.herokuapp.com/gimme/wholesomememes')
              .then(res => res.json())
              .then(async json => {
                    let msg = await message.channel.send('Generating Meme....')
                     const memeEmbed = new Discord.MessageEmbed()
                        .setTitle(json.title)
                        .setImage(json.url)
                        .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`)
                        .setColor('RANDOM');
                    msg.edit(memeEmbed);
              });
    }
}
exports.default = WholesomeCommand;
