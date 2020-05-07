const { Command } = require('discord-akairo');
const Discord = require('discord.js')
class HelpCommand extends Command {
 constructor() {
  super('nations', {
   aliases: ['nations', 'validnations', 'allnations', 'listnations']
  });
 }

 exec(message) {
  const config = require('/home/runner/Political-Bot/config.json')

  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 

  const exampleEmbed = new Discord.MessageEmbed()
	 .setColor(color)
   .setTitle('**Valid nations:**')
   .addField('**United States**', 'A country with only the finest of locals.')
   .addField('**United Kingdom**', 'One word... Tea?')


  return message.channel.send(exampleEmbed);
 }
}

module.exports = HelpCommand;