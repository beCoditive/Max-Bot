"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const trending = require('trending-github');
const Discord = require('discord.js')
class trendingGitCommand extends discord_akairo_1.Command {
    constructor() {
        super('trendingGit', {
            aliases: ['trendingGit'],
            category: 'Search Commands',
            description: {
                content: 'Get Trending Git Repositories.',
                usage: 'trendingGit',
                examples: [
                    'trendingGit'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
        let RandomNo = Math.floor(Math.random() * 23)
        trending('weekly')
        .then(repos => {
            let embed  = new Discord.MessageEmbed()
            .setTitle('Weekly Trending Repositories.')
            .setDescription('This is a Random Trending Repository from Github.                  ')
            .addField('Link' , repos[RandomNo].href)
            .addField('Author' , repos[RandomNo].author , true)
            .addField('Repository Name' , repos[RandomNo].name , true )
            .addField('Language' , repos[RandomNo].language ,true)
            .addField('Description' , repos[RandomNo].description)
            .addField('Stars' , repos[RandomNo].stars , true)
            .addField('Forks' , repos[RandomNo].forks , true)
            .setColor('RANDOM')
            message.channel.send(embed)
        });
   }
}

exports.default = trendingGitCommand;
