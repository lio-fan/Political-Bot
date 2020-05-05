const { Command } = require('discord-akairo');
const Discord = require('discord.js')
class LeaveCommand extends Command {
 constructor() {
  super('leave', {
   aliases: ['leave', 'leaveparty']
  });
 }

 exec(message) {
   if (message.member.roles.cache.find(r => r.name === "Democrat")) {

    const embed = new Discord.MessageEmbed()
     .setColor(color)
     .setDescription(`**${message.author.tag}**, you are already part of the **Democrat** party.`)


    return message.channel.send(embed);
   }
 }
}

module.exports = LeaveCommand;