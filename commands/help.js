const { Command } = require('discord-akairo');
const Discord = require('discord.js')
class PingCommand extends Command {
    constructor() {
        super('help', {
           aliases: ['help', 'info', 'information', 'modules', 'commands'] 
        });
    }
    
    exec(message) {
   	 const exampleEmbed = new Discord.MessageEmbed()
			.setTitle('**Command list:**')
			.addField('**$help:**', 'Displays the help message.')

		return message.channel.send(exampleEmbed);
    }
}

module.exports = PingCommand;