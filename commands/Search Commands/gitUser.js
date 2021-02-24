"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();
const ghUser = require('gh-user');
const Discord = require('discord.js')
class GitUserCommand extends discord_akairo_1.Command {
    constructor() {
        super('gitUser', {
            aliases: ['gitUser'],
            category: 'Search Commands',
            description: {
                content: 'Get Github Repositories.',
                usage: 'gitUser <Topic>',
                examples: [
                    'gitUser food'
                ]
            },
            args: [
                {
                    id: 'search',
                    type: 'string',
                    match: 'rest',
                    default: ""
                }
            ],
            ratelimit: 10
        });
    }
    async exec(message , {search}) {
      const query = search
      if(!search) return message.channel.send('Please specify something to search')
        message.channel.send('Finding User.....')
        
         await ghUser(query).then(i => {
            const dateCreated = i.created_at.split('T')[0]
            const embed = new Discord.MessageEmbed()
            .setDescription(`Serach Results for "${query}". Searched in ${this.client.ws.GitUser} ms`)
            .setColor('RANDOM')
            .setThumbnail(i.avatar_url)
            .addField(`Link` , i.html_url)
            .addField(`Name` , i.name , true)
            .addField('Publich Repos', i.public_repos , true)
            .addField('Public Gists' , i.public_gists , true)
            .addField('Followers' , i.followers , true)
            .addField('Following' , i.following , true)
            .addField('Date Created' , dateCreated , true)

            message.channel.send(embed)
         }).catch(() => {
             return message.channel.send('No User found.')
         })

       
   }
}

exports.default = GitUserCommand;
