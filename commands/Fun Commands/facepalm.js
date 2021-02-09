"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const fetch = require('node-fetch')
class FacepalmCommand extends discord_akairo_1.Command {
    constructor() {
        super('facepalm', {
            aliases: ['facepalm'],
            category: 'Fun Commands',
            description: {
                content: 'Generate facepalm from public API',
                usage: 'facepalm',
                examples: [
                    'facepalm'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
        fetch('https://meme-api.herokuapp.com/gimme/facepalm')
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
exports.default = FacepalmCommand;
