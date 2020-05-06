const { Command } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db')
class VoteCommand extends Command {
 constructor() {
  super('vote', {
   aliases: ['vote']
  });
 }

async exec(message) {
  const config = require('/home/runner/Political-Bot/config.json')

  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 
function embed(text) {
    let embed = new Discord.MessageEmbed();
    embed.setColor(color);
    embed.setDescription(text);
    return embed;
};




async function voted(g) {
    let array = [];
    let guild = await g.members.fetch('', { limit: 2000 });
    let members = guild.array();
    members.forEach(member => {
        if (member.user.bot) return;
        let votes = db.get(member.id) || 0;
        array.push({ id: member.id, count: votes });
    });
};

    let array = [];
		let guild = message.guild
    let fifteen = message.guild.roles.cache.get('702956167332233306');
    let five = guild.roles.cache.get('694242712081268736');
    array.sort((a, b) => a.count - b.count);
    array.reverse();
    array.slice(0, 15).forEach(async data => {
        if (data.count > 0) return (await guild.members.fetch(data.id)).addRole(fifteen);
        (await guild.members.fetch(data.id)).removeRole(fifteen)
    });
    array.slice(0, 5).forEach(async data => {
        if (data.count > 0) return (await guild.members.fetch(data.id)).addRole(five);
        (await guild.members.fetch(data.id)).removeRole(five);
    });
    array.slice(5).forEach(async data => {
        (await guild.members.fetch(data.id)).removeRole(five);
    });
    array.slice(15).forEach(async data => {
        (await guild.members.fetch(data.id)).removeRole(fifteen);
		
});



        if (!message.guild) return message.channel.send(embed(`Please use this inside the server.`));

        let user = message.mentions.users.first();
        if (!user) return message.channel.send(embed('Please mention a user.'));
        if (user.bot) return message.channel.send(embed(`You cannot vote for a bot.`));
        if (user.id === message.author.id) return message.channel.send(embed(`You cannot vote for yourself.`));
        let votes = db.get(user.id) || 0;
        db.set(user.id, votes+1);
        message.channel.send(embed(`**${message.author.tag}**, you have successfully voted for **${user.tag}**.`));
        db.set(`r${message.author.id}`, Date.now());
        voted(message.guild);
    };

 }


module.exports = VoteCommand;