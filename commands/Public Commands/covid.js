"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const covid = require('covidtracker');
const api = require('novelcovid');
const Discord = require('discord.js')
class CovidCommand extends discord_akairo_1.Command {
    constructor() {
        super('covid', {
            aliases: ['covid'],
            category: 'Public Commands',
            description: {
                content: 'Get Images from covid',
                usage: 'covid <Country>',
                examples: [
                    'covid India',
                    'covid all'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {

        if(message.content.slice(7) === 'all'){
            let all = await api.all();
            let embed = await new  Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Global Covid-19 Cases')
            .setDescription('Number of cases in all around the world.')
            .addField('Cases' , all.cases , true)
            .addField('Active' , all.active , true)
            .addField('Deaths' , all.deaths , true)
            .addField('Recovered' , all.recovered , true)
            .addField('Critical Cases' , all.critical , true)
            .addField("Today's Cases" , all.todayCases , true);
    
            message.channel.send(embed)
        }
        else{
           const country = message.content.slice(7)
           if(!country) return message.channel.send('Please Enter a Country.')


           let specificCountry = await api.countries({country: country})
           
           let embed = await new  Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${country} Covid-19 Cases`)
            .setDescription('Number of cases in all around the world.')
            .addField('Cases' , specificCountry.cases , true)
            .addField('Active' , specificCountry.active , true)
            .addField('Deaths' , specificCountry.deaths , true)
            .addField('Recovered' , specificCountry.recovered , true)
            .addField('Critical Cases' , specificCountry.critical , true)
            .addField("Today's Cases" , specificCountry.todayCases , true);

            message.channel.send(embed)
        }
      
    }
}
exports.default = CovidCommand;
