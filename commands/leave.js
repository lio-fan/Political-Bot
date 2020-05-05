const { Command } = require('discord-akairo');
const Discord = require('discord.js')
class LeaveCommand extends Command {
 constructor() {
  super('leave', {
   aliases: ['leave', 'leaveparty']
  });
 }

 exec(message) {
  let republicanRole = message.guild.roles.cache.find(role => role.name === "Republican");
  let democraticRole = message.guild.roles.cache.find(role => role.name === "Democrat");

   if (message.member.roles.cache.find(r => r.name === "Democrat")) {

    const embed = new Discord.MessageEmbed()
     .setColor(color)
     .setDescription(`**${message.author.tag}**, you have successfully left the **Democratic** party.`)
		
		message.member.roles.remove(democraticRole)

    return message.channel.send(embed);
   }

   if (message.member.roles.cache.find(r => r.name === "Republican")) {

    const embed = new Discord.MessageEmbed()
     .setColor(color)
     .setDescription(`**${message.author.tag}**, you have successfully left the **Republican** party.`)
		
		message.member.roles.remove(republicanRole)

    return message.channel.send(embed);
   }


    const embed = new Discord.MessageEmbed()
     .setColor(color)
     .setDescription(`**${message.author.tag}**, you aren't part of a party.`)
		
    return message.channel.send(embed);


 }
}

module.exports = LeaveCommand;