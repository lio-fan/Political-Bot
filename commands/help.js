const { Command } = require('discord-akairo');
const Discord = require('discord.js')
class HelpCommand extends Command {
 constructor() {
  super('help', {
   aliases: ['help', 'info', 'information', 'modules', 'commands']
  });
 }

 exec(message) {
  const config = require('/home/runner/Political-Bot/config.json')

  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 

  const exampleEmbed = new Discord.MessageEmbed()
	 .setColor(color)
   .setTitle('**Command list:**')
   .addField('**$help:**', 'Displays the help message.')
   .addField('**$setlaw:**', 'Create a new law.')
   .addField('**$join:**', 'Join a political party.')
   .addField('**$leave:**', 'Leave your political party.')
   .addField('**$party:**', 'Learn your political party.')

  return message.channel.send(exampleEmbed);
 }
}

module.exports = HelpCommand;