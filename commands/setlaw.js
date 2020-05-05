const { Command } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db')
class SetLawCommand extends Command {
    constructor() {
        super('setlaw', {
           aliases: ['setlaw', 'createlaw'] 
        });
    }
    
    exec(message) {
function embed(text) {
    let embed = new MessageEmbed();
    embed.setColor('RANDOM');
    embed.setDescription(text);
    return embed;
};	

let lawChannel = message.guild.channels.cache.find(channel => channel.name === "laws");


let args = message.content.slice('$'.length).split(/ +/);
   		  if (!message.guild) return message.channel.send(embed(`Please use this inside the server.`));
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            return message.channel.send(new Discord.MessageEmbed().setColor('#FF0000').setTitle(`You must have **Admin** to use this command.`));
        };
        let law = args.slice(1).join(' ');
        if (!law) return message.channel.send(embed(`Please specify the new law.`));
        if (!lawChannel) return;
        let id = db.get('lawid') || 0;
        lawChannel.send(new Discord.MessageEmbed().setTitle(`**New Law**`).setDescription(law).setFooter(`Law ID: ${id+1}`));
        db.set('lawid', id+1);
    };
  
 }


module.exports = SetLawCommand;