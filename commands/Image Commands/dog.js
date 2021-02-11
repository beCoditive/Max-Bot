
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const gis = require('g-i-s');
class CatCommand extends discord_akairo_1.Command {
    constructor() {
        super('dog', {
            aliases: ['dog'],
            category: 'Image Commands',
            description: {
                content: 'Dog Image',
                usage: 'dog',
                examples: [
                    'dog'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , text) {
        gis('dog', logResults);
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
