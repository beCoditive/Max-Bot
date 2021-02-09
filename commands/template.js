"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
class TestCommand extends discord_akairo_1.Command {
    constructor() {
        super('', {
            aliases: [''],
            category: '',
            description: {
                content: '',
                usage: '',
                examples: [
                    ''
                ]
            },
            ratelimit: 10
        });
    }
    async exec(message , args) {
     
    }
}
exports.default = TestCommand;
