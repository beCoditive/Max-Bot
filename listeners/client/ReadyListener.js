"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require("discord.js")
const config_1 = require("../../config");
const quotes = require("./../../quotes_list.js").quotes;
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
        this.client.user.setActivity("$help | Playing beCoditive.ml" , {type: "PLAYING"})
        

        var quotesChannel = this.client.channels.cache.find(c => c.id === `${config_1.quotesChannel}`)

        setInterval(() => {
            let  q  = quotes[Math.floor(Math.random() * quotes.length)]

            let Embed = new Discord.MessageEmbed()
              .setTitle('Quote of the Hour')
              .setDescription(`"${q.title}"`)
              .setFooter('- Max Bot 2021')
              .setTimestamp(new Date())

            quotesChannel.send(Embed)
        } , 1000 * 60 * 60 * 6);
    }
}

exports.default = ReadyListener;
