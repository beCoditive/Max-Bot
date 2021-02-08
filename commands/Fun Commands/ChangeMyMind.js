// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const discord_akairo_1 = require("discord-akairo");
// const { MessageEmbed } = require("discord.js");
// const Discord = require('discord.js')
// const canvas = require("canvas");
// class TriviaCommand extends discord_akairo_1.Command {
//     constructor() {
//         super('changemymind', {
//             aliases: ['changemymind'],
//             category: 'Fun Commands',
//             description: {
//                 content: 'Generates a change my my mind image',
//                 usage: 'changemymind',
//                 examples: [
//                     'changemymind'
//                 ]
//             },
//             ratelimit: 3
//         });
//     }
//     async exec(message , args) {
//       let text = message.content.slice(14) 
//       if(!text) return message.channel.send('Please Provide Some Topic to Change Your Mind.')

//       let image = await canvas.changemymind(text)

//       let ChangeMindImage = new Discord.MessageAttachment(image , 'yourmind.png')

//       message.channel.send(ChangeMindImage)
//     }
// }
// exports.default = TriviaCommand;
