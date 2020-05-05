const { Command } = require('discord-akairo');
const Discord = require('discord.js')
class HelpCommand extends Command {
 constructor() {
  super('party', {
   aliases: ['party']
  });
 }

 exec(message) {
  const config = require('/home/runner/Political-Bot/config.json')

  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];

  if (message.member.roles.cache.find(r => r.name === "Democrat")) {

    const embed = new Discord.MessageEmbed()
     .setColor(color)
     .setDescription(`**${message.author.tag}**, you are currently part of the **Democratic** party.`)


    return message.channel.send(embed);
   }
  if (message.member.roles.cache.find(r => r.name === "Republican")) {

    const embed = new Discord.MessageEmbed()
     .setColor(color)
     .setDescription(`**${message.author.tag}**, you are currently part of the **Republican** party.`)


    return message.channel.send(embed);
   }
   const embed = new Discord.MessageEmbed()
     .setColor(color)
     .setDescription(`**${message.author.tag}**, you are currently not in a party`);
    return message.channel.send(embed);

 }
}

module.exports = HelpCommand;