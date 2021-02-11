// "use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const ytsr = require("ytsr");
class YTChannelCommand extends discord_akairo_1.Command {
    constructor() {
        super("ytChannel", {
            aliases: ['ytChannel'],
            category: 'Search Commands',
            description: {
                content: 'Returns youtube channels',
                usage: 'ytChannel [search]',
                examples: [
                    'ytChannel beCoditive',
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
    async exec(message, { search }) {
       const query = search
       if(!search) return message.channel.send('Please specify something to search')
       message.channel.send('Finding Channel.....')
       const res = await ytsr(query).catch(e => {
           return message.channel.send('No results were found')
       })
       const channels = res.items.filter(i => i.type === "channel")[0];
       if(!channels) return message.channel.send('No results were found!')

      
       const embed = new Discord.MessageEmbed()
       .setTitle(channels.name)
       .setThumbnail(channels.bestAvatar.url)
       .setDescription(`https://www.youtube.com/c/${channels.channelID}`)
       .addField('Subscribers' , `${channels.subscribers}` ,  true)
       .addField('Total Video(s)' , `${channels.videos}` , true)
       .addField('Description' , `${channels.descriptionShort}` ,true)

       message.channel.send(embed)
    }
}
exports.default =  YTChannelCommand;
