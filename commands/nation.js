const { Command } = require('discord-akairo');
const Discord = require('discord.js')
class JoinCommand extends Command {
 constructor() {
  super('nation', {
   aliases: ['nation', 'country', 'joinnation', 'joincountry']
  });
 }

 exec(message) {

  const config = require('/home/runner/Political-Bot/config.json')

  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];


  let unitedStatesRole = message.guild.roles.cache.find(role => role.name === "United States");
  let unitedKingdomRole = message.guild.roles.cache.find(role => role.name === "United Kingdom");
  let chinaRole = message.guild.roles.cache.find(role => role.name === "China");
  let args = message.content.slice('$'.length).split(/ +/);

  let joinedParty = args.slice(1).join(' ');
  if (!joinedParty) return message.channel.send('you need to specify a nation to join')


  if (joinedParty.toLowerCase() === 'United States') {

   if (message.member.roles.cache.find(r => r.name === "United States")) {

    const embed = new Discord.MessageEmbed()
     .setColor(color)
     .setDescription(`**${message.author.tag}**, you are already part of the **United States** nation.`)


    return message.channel.send(embed);
   }
		if (message.member.roles.cache.find(r => r.name === "United Kingdom")) {

   const embed = new Discord.MessageEmbed()
   	.setColor(color)
   	.setDescription(`**${message.author.tag}**, you are already part of the **United Kingdom** party.`)


    return message.channel.send(embed);
   }
		if (message.member.roles.cache.find(r => r.name === "China")) {

   const embed = new Discord.MessageEmbed()
   	.setColor(color)
   	.setDescription(`**${message.author.tag}**, you are already part of the **Chinese** nation.`)


    return message.channel.send(embed);
   }	 

   message.member.roles.add(unitedStatesRole)
   const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`**${message.author.tag}**, You have successfully joined the **United States** nation.`)

   message.channel.send(embed);
  }
  if (joinedParty.toLowerCase() === 'United Kingdom') {

   if (message.member.roles.cache.find(r => r.name === "United Kingdom")) {

    const embed = new Discord.MessageEmbed()
     .setColor(color)
     .setDescription(`**${message.author.tag}**, you are already part of the **United Kingdom** nation.`)


    return message.channel.send(embed);
   }
   if (message.member.roles.cache.find(r => r.name === "China")) {

    const embed = new Discord.MessageEmbed()
     .setColor(color)
     .setDescription(`**${message.author.tag}**, you are already part of the **Chinese** nation.`)


    return message.channel.send(embed);
   }
   if (message.member.roles.cache.find(r => r.name === "United States")) {

    const embed = new Discord.MessageEmbed()
     .setColor(color)
     .setDescription(`**${message.author.tag}**, you are already part of the **United States** nation.`)


    return message.channel.send(embed);
   }	 
   message.member.roles.add(unitedKingdomRole)
   const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`**${message.author.tag}**, You have successfully joined the **United Kingdom** nation.`)

   message.channel.send(embed);	 
 if (joinedParty.toLowerCase() === 'China') {

   if (message.member.roles.cache.find(r => r.name === "China")) {

    const embed = new Discord.MessageEmbed()
     .setColor(color)
     .setDescription(`**${message.author.tag}**, you are already part of the **Chinese** nation.`)


    return message.channel.send(embed);
   }
   if (message.member.roles.cache.find(r => r.name === "United Kingdom")) {

    const embed = new Discord.MessageEmbed()
     .setColor(color)
     .setDescription(`**${message.author.tag}**, you are already part of the **United Kingdom** nation.`)


    return message.channel.send(embed);
   }
   if (message.member.roles.cache.find(r => r.name === "United States")) {

    const embed = new Discord.MessageEmbed()
     .setColor(color)
     .setDescription(`**${message.author.tag}**, you are already part of the **United States** nation.`)


    return message.channel.send(embed);
   }	 
   message.member.roles.add(chinaRole)	 
   const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`**${message.author.tag}**, You have successfully joined the **Chinese** nation.`)

   message.channel.send(embed);
  }

 }
}
}
module.exports = JoinCommand;