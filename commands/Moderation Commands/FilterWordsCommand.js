"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
const config_1 = require("../../config");
class FilterWordsCommand extends discord_akairo_1.Command {
    constructor() {
        super('filterwords', {
            aliases: ['filterwords', 'fw', 'fwords'],
            category: 'Moderation Commands',
            description: {
                content: 'Manages filtered words.',
                usage: 'filterwords [action] <args>',
                examples: [
                    'filterwords add assembly',
                    'fw remove noob'
                ]
            },
            args: [
                {
                    id: 'action',
                    type: 'string',
                    default: 'help'
                },
                {
                    id: 'fwArgs',
                    type: 'string',
                    match: 'rest',
                }
            ],
            ratelimit: 3
        });
    }
    async exec(message, { action, fwArgs }) {
        const fwJSON = JSON.parse(fs_1.readFileSync("./data.json", "utf8"));
        const response = new discord_js_1.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`FilterWords | ${action.charAt(0).toUpperCase() + action.slice(1).toLowerCase()}`);
        switch (action) {
            case 'list':
                if (fwJSON.filteredWords.length > 0)
                    response.addField('Filtered words:', `\`\`\`${fwJSON.filteredWords.join(', ')}\`\`\``);
                else
                    response.setDescription(`It seems like there are no filtered words added yet!`);
                break;
            case 'add':
                if (!fwArgs)
                    return message.channel.send('Please input one or more words to add to the list.');
                let aWords = fwArgs.split(', ');
                if (aWords.length === 1) {
                    if (fwJSON.filteredWords.includes(fwArgs)) {
                        response.setDescription(`It seems like \`${fwArgs}\` is already a filtered word.`);
                    }
                    else {
                        response.setDescription(`\`${fwArgs.toLowerCase()}\` has been added to the list of filtered words.`);
                        fwJSON.filteredWords.push(fwArgs);
                    }
                }
                else {
                    let newWords = [];
                    let usedWords = [];
                    for (const word of aWords) {
                        if (!fwJSON.filteredWords.includes(word)) {
                            fwJSON.filteredWords.push(word);
                            newWords.push(word);
                        }
                        else {
                            usedWords.push(word);
                        }
                    }
                    if (newWords.length > 1 && usedWords.length === 0) {
                        response.setDescription(`The words \`${newWords.join(', ')}\` have been added to the filtered words list.`);
                    }
                    else if (usedWords.length > 1 && newWords.length === 0) {
                        response.setDescription('It seems like all of the words were already in the filtered words list.');
                    }
                    else {
                        response.addFields({ name: 'Words added to the list:', value: `\`\`\`${newWords.join(', ')}\`\`\`` }, { name: 'Words already in list:', value: `\`\`\`${usedWords.join(', ')}\`\`\`` });
                    }
                }
                fs_1.writeFile('./data.json', JSON.stringify(fwJSON, null, 4), (err) => {
                    if (err)
                        console.log(err);
                });
                break;
            case 'remove':
                if (!fwArgs)
                    return message.channel.send('Please input one or more words to remove from the list.');
                let rWords = fwArgs.split(', ');
                if (rWords.length === 1) {
                    if (fwJSON.filteredWords.includes(fwArgs)) {
                        fwJSON.filteredWords.splice(fwJSON.filteredWords.indexOf(fwArgs), 1);
                        response.setDescription(`\`${fwArgs}\` was removed from the filtered words list.`);
                    }
                    else {
                        response.setDescription(`${fwArgs.toLowerCase()} is not in the list of filtered words.`);
                    }
                }
                else {
                    let delWords = [];
                    let notWords = [];
                    for (const word of rWords) {
                        if (fwJSON.filteredWords.includes(word)) {
                            fwJSON.filteredWords.splice(fwJSON.filteredWords.indexOf(word), 1);
                            delWords.push(word);
                        }
                        else {
                            notWords.push(word);
                        }
                    }
                    if (delWords.length > 1 && notWords.length === 0) {
                        response.setDescription(`The words \`${delWords.join(', ')}\` have been removed from the filtered words list.`);
                    }
                    else if (notWords.length > 1 && delWords.length === 0) {
                        response.setDescription('It seems like all of the words were not in the filtered words list.');
                    }
                    else {
                        response.addFields({ name: 'Words removed from the list:', value: `\`\`\`${delWords.join(', ')}\`\`\`` }, { name: 'Words which weren\'t in list:', value: `\`\`\`${notWords.join(', ')}\`\`\`` });
                    }
                }
                fs_1.writeFile('./data.json', JSON.stringify(fwJSON, null, 4), (err) => {
                    if (err)
                        console.log(err);
                });
                break;
            case 'reset':
                const confirmationEmbed = new discord_js_1.MessageEmbed()
                    .setTitle(`**FilterWords | Confirm Action**`)
                    .setColor('RANDOM')
                    .setDescription(`**The following action will delete every word in the current filtered words list. React on this message to confirm this action.**`);
                const confirmationMessage = await message.channel.send(confirmationEmbed);
                confirmationMessage.react('✅');
                const filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
                await confirmationMessage.awaitReactions(filter, { time: 5000 })
                    .then(confirmation => {
                    if (confirmation.first()) {
                        response.setDescription('**Confirmation received, filtered words list reset.**');
                        confirmationMessage.delete();
                        fwJSON.filteredWords = [];
                        fs_1.writeFile('./data.json', JSON.stringify(fwJSON, null, 4), (err) => {
                            if (err)
                                console.log(err);
                        });
                    }
                    else {
                        response.setDescription('**You didn\'t react in time, action cancelled.**');
                        confirmationMessage.delete();
                    }
                });
                break;
            default:
            case 'help':
                response.setAuthor('FilterWords | Help | Commands');
                fwJSON.fwActions.map(obj => response.addField(`**${obj.action}**`, `**Description:** \`${obj.description}\`\n**Usage:** \`${config_1.prefix}${obj.usage}\``));
                break;
        }
        return message.channel.send(response);
    }
}
exports.default = FilterWordsCommand;
