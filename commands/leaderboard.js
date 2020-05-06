const { Command } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db')
class LeaderBoardCommand extends Command {
 constructor() {
  super('leaderboard', {
   aliases: ['leaderboard', 'lb']
  });
 }

async exec(message, g) {
  const config = require('/home/runner/Political-Bot/config.json')

  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 
         if (!message.guild) return message.channel.send(embed(`Please use this inside the server.`))
			  let array = [];

        let guild = await message.guild.members.fetch('', { limit: 2000 });
        let members = guild.array();
        members.forEach(member => array.push({name: member.displayName, count: db.get(member.id) || 0}));
        array.sort((a, b) => {return b.count - a.count});
        let string = '';
        array.slice(0, 10).forEach(memberDATA => {
            string += `**${memberDATA.name}: ${memberDATA.count.toFixed(2)}**\n`
        });
        message.channel.send(new Discord.MessageEmbed().setTitle('Presedential Election').setDescription(string).setColor(color));
 }
}

module.exports = LeaderBoardCommand;