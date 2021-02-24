"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const request = require('request');

const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");

class jokeCommand extends discord_akairo_1.Command {
    constructor() {
        super('joke', {
            aliases: ['joke'],
            category: 'Fun Commands',
            description: {
                content: 'Tells a joke to the user.',
                usage: 'joke',
                examples: [
                    'joke'
                ]
            },
            ratelimit: 5
        });
    }
    async exec(message , args) {

        /**
         * Call the API to get joke return it to the request method
         * @type {{headers: {Cookie: string}, method: string, url: string}}
         */
        const options = {
            'method': 'GET',
            'url': 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky?blacklistFlags=nsfw,racist,sexist&type=single',
            'headers': {
                'Cookie': '__cfduid=da8a1b44efa0c82b5c4f5ce7a676dc9e51614183379'
            }
        };

        /**
         * Return joke from API to user in embed
         */
        await request(options, function (error, response) {
            if (error) throw new error(error);

            response.body = JSON.parse(response.body)

            if (response.body['error'] === true) {
                let Embed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('There is an error')
                    .setFooter(`Error Code: ${response.body['error']}`)
                return message.channel.send(Embed)
            } else {
                let data = {
                    category: response.body.category,
                    joke: response.body.joke
                }

                let Embed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Here is a joke!')
                    .setDescription(`${data.joke}`)
                    .setFooter(`Category: ${data.category}`)
                return message.channel.send(Embed)
            }
        });
    }
}
exports.default = jokeCommand;
