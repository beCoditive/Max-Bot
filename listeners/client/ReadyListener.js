"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require("discord.js")
const config_1 = require("../../config");

const meme = require('random-jokes-api')

class ReadyListener extends discord_akairo_1.Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready',
            category: 'client'
        });
    }
    async exec() {
        console.log(`Bot is running. ${this.client.user.tag}`);
        this.client.user.setActivity(`$help | Listing to ${this.client.guilds.cache.size} servers`, {
            type: "PLAYING"
          });
        

        var quotesChannel = this.client.channels.cache.find(c => c.id === `${config_1.quotesChannel}`)

        setInterval(() => {
           
            let quote = meme.quotes()

            let Embed = new Discord.MessageEmbed()
              .setTitle('Quote of the Hour')
              .setDescription(`"${quote}"`)
              .setFooter(`- Max Bot ${config_1.version}`)
              .setTimestamp(new Date())

            quotesChannel.send(Embed)
        } , 1000 * 60 * 60 * 6);
    }
}

exports.default = ReadyListener;
