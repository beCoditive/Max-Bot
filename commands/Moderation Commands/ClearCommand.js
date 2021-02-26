"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class ClearCommand extends discord_akairo_1.Command {
    constructor() {
        super('clear', {
            aliases: ['clear', 'purge'],
            category: 'Moderation Commands',
            description: {
                content: 'Purges an amount of messages in a channel.',
                usage: 'clear [number of messages]',
                examples: [
                    'clear 100',
                    'purge 72'
                ]
            },
            args: [
                {
                    id: 'messages',
                    type: 'number',
                    prompt: {
                        start: (message) => `Please provide a number of messages to delete.`,
                        retry: (message) => `Please provide a valid number of messages to delete.`
                    }
                }
            ],
            ratelimit: 10
        });
    }
    async exec(message, { messages }) {

        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: I need administartor Premissions for this Command LOL !")

        if (!message.member.permissions.has('MANAGE_MESSAGES'))
            return message.channel.send('You need to have the `Manage Messages` permission to use this command.');
       
            if(messages > 100) {
                return message.channel.send('Only 100 messages are allowed to be deleted at a time.')
            }

            if (message.channel.type === 'text')
           await  message.channel.bulkDelete(messages, true);
        return message.util.send(`Deleted ${messages} messages`);
    }
}
exports.default = ClearCommand;
