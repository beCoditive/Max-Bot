"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();
const Discord = require('discord.js')
class GitRepoCommand extends discord_akairo_1.Command {
    constructor() {
        super('gitRepo', {
            aliases: ['gitRepo'],
            category: 'Search Commands',
            description: {
                content: 'Get Github Repositories.',
                usage: 'gitRepo <user/repo>',
                examples: [
                    'gitRepo beCoditive/Max-Bot'
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
        message.channel.send('Finding Repo.....')
        octokit.search.repos({
			q: query,
			per_page: '10'
		}).then(({ data }) => {
                const embed = new Discord.MessageEmbed()
                .setTitle(`Showing the Top result of Search '${search}'`)
                .setDescription(data.items[0].full_name)
                .setThumbnail(data.items[0].owner.avatar_url)
                .addField(`Link` , data.items[0].html_url)
                .addField('Repositort Name' ,data.items[0].name , true)
                .addField('Owner' , data.items[0].owner.login , true)
                .addField('Forks' , data.items[0].forks , true)
                .addField('Description' , data.items[0].description)
                .addField('Befault Branch' , data.items[0].default_branch , true)
                .addField('Watchers' , data.items[0].watchers , true)
                .addField('Open Issue' , data.items[0].open_issues , true)
                .addField('Language' , data.items[0].language , true)
                .addField('License' , data.items[0].license.name)

                message.channel.send(embed)
        }).catch(() => {
            return message.channel.send('No Data Found!')
        })
   }
}

exports.default = GitRepoCommand;
