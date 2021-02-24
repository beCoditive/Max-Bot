"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const axios_1 = __importDefault(require("axios"));
const Discord = require('discord.js')
const ytsr = require("ytsr");
class YTSearchCommand extends discord_akairo_1.Command {
    constructor() {
        super("searchYT", {
            aliases: ['searchYT'],
            category: 'Search Commands',
            description: {
                content: 'Returns youtube videos',
                usage: 'searchYT [search]',
                examples: [
                    'searchYT beCoditive',
                ]
            },
            ratelimit: 10,
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
    async  exec(message, { search }) {
       const query = search
       if(!search) return message.channel.send('Please specify something to search')
       message.channel.send('Finding Video.....')
       const res = await ytsr(query).catch(e => {
           return message.channel.send('No results were found')
       })
       const video = res.items.filter(i => i.type === "video")[0];
       if(!video) return message.channel.send('No results were found!')

       const embed = new Discord.MessageEmbed()
       .setTitle(video.title)
       .setDescription(video.url)
       .setImage(video.bestThumbnail.url)
       .setFooter(`Views: ${video.views} | Upload At: ${video.uploadedAt} | Duration: ${video.duration}`)

       message.channel.send(embed)
    }
}
exports.default = YTSearchCommand;
