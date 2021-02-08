"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const Canvas = require("canvas")
const Discord = require("discord.js")
const config_1 = require("../../config");
class WelcomeListener extends discord_akairo_1.Listener {
    constructor() {
        super('guildMemberAdd', {
            emitter: 'client',
            event: 'guildMemberAdd',
            category: 'client'
        });
    }
    async exec(member) {
        // Font For Welcome
Canvas.registerFont("./font/Welcome.ttf", { family: 'Comic Sans' })
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 37}px 'Comic Sans'`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

// Welcome Message

  const english_ordinal_rules = new Intl.PluralRules("en", {type: "ordinal"});
  const suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th"
  };

  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
  if (!channel) return;

  const canvas = Canvas.createCanvas(1024 ,500);
  const ctx = canvas.getContext('2d')

  const background = await Canvas.loadImage(config_1.welcomeImage)
  ctx.drawImage(background, 0, 0 ,canvas.width , canvas.height);

  ctx.strokeStyle = '#740';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.font = '75px "Comic Sans"'
	ctx.fillStyle = '#ffffff';
  ctx.fillText('Welcome', 340 , 377);
  
  ctx.font = applyText(canvas, `${member.user.tag}!`);
	ctx.fillStyle = '#ffffff';
  ctx.fillText(`${member.user.tag}`, canvas.width / 2.7, 425);
  
  function ordinal(number) {
    const suffix = suffixes[english_ordinal_rules.select(number)];
    return (number + suffix);
}

  ctx.font = '40px valorant';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`You Are Our ${ordinal(member.guild.memberCount)} member`, canvas.width / 4.4, 480);

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
  
  ctx.beginPath();
	ctx.arc(512, 175, 130, 0, Math.PI * 2, true);
	ctx.closePath();
  ctx.clip();
  
  ctx.drawImage(avatar, 380, 30, 280, 280);

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

  channel.send(`Welcome ${member} to ${config_1.serverName}` , attachment)

  let DeflautRole = member.guild.roles.cache.find(role => role.id === `${config_1.defaultRole}`);
  member.roles.add(DeflautRole)
    }
}
exports.default = WelcomeListener;