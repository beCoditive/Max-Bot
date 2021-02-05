"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const axios_1 = __importDefault(require("axios"));
class DocsCommand extends discord_akairo_1.Command {
    constructor() {
        super("docs", {
            aliases: ['docs'],
            category: 'Public Commands',
            description: {
                content: 'Returns discord.js documentations.',
                usage: 'docs [search]',
                examples: [
                    'docs MessageEmbed',
                    'docs GuildMember#fetch()'
                ]
            },
            ratelimit: 3,
            args: [
                {
                    id: 'search',
                    type: 'string',
                    match: 'rest',
                    default: ""
                }
            ]
        });
    }
    exec(message, { search }) {
        const uri = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(search)}`;
        if (!search)
            return message.util.send('Search string cannot be empty.');
        axios_1.default
            .get(uri)
            .then((embed) => {
            const { data } = embed;
            if (data && !data.error) {
                return message.util.send({ embed: data });
            }
            else {
                return message.util.send('Couldn\'t find that documentation.');
            }
        })
            .catch(error => {
            return message.util.send('There was an error trying to execute this search. ' + error.message);
        });
        return;
    }
}
exports.default = DocsCommand;
