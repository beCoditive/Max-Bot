// "use strict";
// const wikipedia = require("wikipedia");
// Object.defineProperty(exports, "__esModule", { value: true });
// const discord_akairo_1 = require("discord-akairo");
// const img = require("images-scraper")
// class PingCommand extends discord_akairo_1.Command {
//     constructor() {
//         super('wiki', {
//             aliases: ['wiki'],
//             category: 'Search Commands',
//             description: {
//                 content: 'Get Images from wiki',
//                 usage: 'wiki <Topic>',
//                 examples: [
//                     'wiki Microsoft'
//                 ]
//             },
//             ratelimit: 3,
//             args: [
//                 {
//                     id: 'search',
//                     type: 'string',
//                     match: 'rest',
//                     default: ""
//                 }
//             ]
//         });
//     }
//     async exec(message , {search}) {
//         const query = search
//        if(!query) return message.channel.send('Please specify something to search')
//        const res = await wikipedia.search(`${query}`, 'en');
//        console.log(res)
//        let i = 0
//        let msg = message.channel.send(`Page[${i} / ${res.length - 1}]\n${res[i].html_url}`).then(async msg => {
//         await msg.react('⏩')
       

//        this.client.on("messageReactionAdd", async (reaction, user) => {
//         if(user.bot) return;
//         if(!reaction.emoji.name === "⏩") return;
       

//         if(reaction.emoji.name === "⏩"){
//             let e = i++
//          if( e <= res.length - 1){
//             await msg.edit(`Page[${e} / ${res.length - 1}]\n${res[e].html_url}`)
//          }
//          else{
//             msg.edit('No More Results Left.')
//          }     
//         }
//       })
//     });
    
//     }

// }
// exports.default = PingCommand;
