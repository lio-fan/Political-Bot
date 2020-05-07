const { Command } = require('discord-akairo');
const Discord = require('discord.js')
class HelpCommand extends Command {
 constructor() {
  super('partyhelp', {
   aliases: ['partyhelp', 'nationhelp']
  });
 }

 exec(message) {
  const config = require('/home/runner/Political-Bot/config.json')

  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 

  const exampleEmbed = new Discord.MessageEmbed()
	 .setColor(color)
   .setTitle('**Command list:**')
   .addField('**$party:**', 'Learn your political party.')
   .addField('**$join:**', 'Join a political party.')
   .addField('**$leave:**', 'Leave your political party.')
   .addField('**$nation:**', 'Join a nation.')
   .addField('**$nations:**', 'List all valid nations.')


  return message.channel.send(exampleEmbed);
 }
}

module.exports = HelpCommand;