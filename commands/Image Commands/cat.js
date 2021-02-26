
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const gis = require('g-i-s');
class CatCommand extends discord_akairo_1.Command {
    constructor() {
        super('cat', {
            aliases: ['cat'],
            category: 'Image Commands',
            description: {
                content: 'Gives you your Epic game rate.',
                usage: 'cat',
                examples: [
                    'cat'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , text) {
        gis('cat', logResults);
        let r = Math.floor(Math.random() * 80)
        function logResults(error, results) {
            if (error) {
              console.log(error);
            }
            else {
              const cat =  results[r].url

              message.channel.send(cat)


            }
          }
    }

}
exports.default = CatCommand;
