"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const common_tags_1 = require("common-tags");
const config_1 = require("../../config");
class HelpCommand extends discord_akairo_1.Command {
    constructor() {
        super('help', {
            aliases: ['help'],
            category: 'Public Commands',
            description: {
                content: 'View available commands on the bot',
                usage: 'help <command>',
                examples: [
                    'help',
                    'help ping'
                ]
            },
            ratelimit: 3,
            args: [
                {
                    id: 'command',
                    type: 'commandAlias',
                    default: null
                }
            ]
        });
    }
    async exec(message, { command }) {
        if (command) {
            const embed = new discord_js_1.MessageEmbed()
                .setAuthor(`Help | ${command}`, this.client.user.displayAvatarURL())
                .setColor('RANDOM')
                .setDescription(common_tags_1.stripIndents `
                    **Description:**
                    ${command.description.content || "No content provided."}

                    **Usage:**
                    ${command.description.usage || "No usage provided."}

                    **Examples:**
                    ${command.description.examples ? command.description.examples.map(e => `\`${e}\``).join('\n') : "No examples provided."}
                `)
               
            return message.channel.send(embed);
        }
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor(`Help | ${this.client.user.username}`, this.client.user.displayAvatarURL())
        for (const category of this.handler.categories.values()) {
            if (['default'].includes(category.id))
                continue;
            embed.addField(category.id, category
                .filter(cmd => cmd.aliases.length > 0)
                .map(cmd => `**\`${cmd}\`**`)
                .join(", ") || "No commands in this category.")
        }
        embed.addFields(
            { 
              name:`Join ${config_1.serverName}'s Official Server:` ,
              value : `${config_1.serverLink}`
            }
         );
        embed.setFooter(`${this.client.user.username} ${config_1.version} | © beCoditive Inc.`)
        embed.setColor('RANDOM')
        return message.channel.send(embed);
    }
}
exports.default = HelpCommand;
