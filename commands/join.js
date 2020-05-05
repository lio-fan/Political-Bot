const { Command } = require('discord-akairo');
const Discord = require('discord.js')
class JoinCommand extends Command {
    constructor() {
        super('join', {
           aliases: ['join', 'joinparty'] 
        });
    }
    
    exec(message) {

const config = require('/home/runner/Political-Bot/config.json')

let colors = config.colors
let color = colors[Math.floor(Math.random() * colors.length)];	


let republicanRole = message.guild.roles.cache.find(role => role.name === "Republican");

let args = message.content.slice('$'.length).split(/ +/);

  	 let joinedParty = args.slice(1).join(' ');
		 if (!joinedParty) return message.channel.send('you need to specify a party to join')


	if (joinedParty.toLowerCase === 'democrat') {

	if(message.member.roles.cache.find(r => r.name === "Democrat")) {

	 const embed = new Discord.MessageEmbed()
	 .setColor(color)
	.setDescription(`**${message.author.tag}**, you are already part of the **Republican** party.`)
    

return message.channel.send(embed);
}

	message.member.roles.add(republicanRole)
	const embed = new Discord.MessageEmbed()
	.setColor(color)
	.setDescription(`**${message.author.tag}**, You have successfully joined the **Republican** party.`)

message.channel.send(embed);
  }
	if (joinedParty.toLowerCase() === 'republican') {

	if(message.member.roles.cache.find(r => r.name === "Republican")) {

	 const embed = new Discord.MessageEmbed()
	 .setColor(color)
	.setDescription(`**${message.author.tag}**, you are already part of the **Republican** party.`)
    

return message.channel.send(embed);
}

	message.member.roles.add(republicanRole)
	const embed = new Discord.MessageEmbed()
	.setColor(color)
	.setDescription(`**${message.author.tag}**, You have successfully joined the **Republican** party.`)

message.channel.send(embed);
  }

	}
}

module.exports = JoinCommand;