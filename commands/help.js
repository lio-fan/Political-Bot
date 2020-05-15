const { Command } = require('discord-akairo');
const Discord = require('discord.js')
class HelpCommand extends Command {
 constructor() {
  super('help', {
   aliases: ['help', 'info', 'information', 'modules', 'commands']
  });
 }

 exec(message) {
  const config = require('/app/config.json')

  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 

  const exampleEmbed = new Discord.MessageEmbed()
	 .setColor(color)
   .setTitle('**Command list:**')
   .addField('**$help:**', 'Displays the help message.')
   .addField('**$setlaw:**', 'Create a new law.')
   .addField('**$lb:**', 'Displays the leaderboard.')
   .addField('**$vote:**', 'Vote for a leader.')
   .addField('**$partyhelp:**', 'Displays the party/nation help message.')


  return message.channel.send(exampleEmbed);
 }
}

module.exports = HelpCommand;
