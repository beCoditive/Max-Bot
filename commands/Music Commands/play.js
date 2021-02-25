"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const ytdl = require('ytdl-core-discord');
class pollCommand extends discord_akairo_1.Command {
    constructor() {
        super('play', {
            aliases: ['play'],
            category: 'Moderation Commands',
            description: {
                content: 'Play Songs',
                usage: 'play',
                examples: [
                    'play'
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message, {channel , reason}) {
        const vc = message.member.voice.channel
        if(!vc) return message.channel.send('You need to be in a voice channel to play music.');
        const permissions = vc.permissionsFor(message.client.user)
        if(!permissions.has('CONNECT')) return message.channel.send("I Don't Have permissions to connect to the Voice Channel")
        if(!permissions.has('SPEAK')) return message.channel.send("I Don't Have permissions to speak in the Voice Channel")

        let url = message.content.slice(6)
        if(!url) return message.channel.send('Please Specify the song')

        try{
            var connection = await vc.join()
        }catch(e){
            return console.error(e)
        }

        const dispatcher =  connection.play(await ytdl(url), { type: 'opus' })
        .on('finish' , () => {
            message.channel.send('Song Ended......')
        })
        .on('error' , error => {
            console.error(error)
        })

    }
}
exports.default = pollCommand;
