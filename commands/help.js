const { Command } = require('discord-akairo');
const Discord = require('discord.js')
class HelpCommand extends Command {
 constructor() {
  super('help', {
   aliases: ['help', 'info', 'information', 'modules', 'commands']
  });
 }

 exec(message) {
  const exampleEmbed = new Discord.MessageEmbed()
   .setTitle('**Command list:**')
   .addField('**$help:**', 'Displays the help message.')
   .addField('**$setlaw:**', 'Creates a new law.')
   .addField('**$join:**', 'Join a political party.')
   .addField('**$leave:**', 'Leave your political party.')

  return message.channel.send(exampleEmbed);
 }
}

module.exports = HelpCommand;