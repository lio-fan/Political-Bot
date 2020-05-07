const { AkairoClient, CommandHandler } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db');
const config = require('./config.json');
let interval = {
 seconds: 30,
 gain: 0.05
};


class MyClient extends AkairoClient {
 constructor() {
  super({
   ownerID: '475281284675928084',
  }, {
   disableEveryone: true
  });
  this.commandHandler = new CommandHandler(this, {
   directory: './commands/',
   prefix: '$'

  });
  this.commandHandler.loadAll();

 }

}
const client = new MyClient();
client.on('guildMemberAdd', member => {
  async function declaredAsAsync() {
   const message = require('discord.js')
   const config = require('./config.json')
   let colors = config.colors
   let color = colors[Math.floor(Math.random() * colors.length)];
   const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle('Please pick your nation by typing it out below.')
    .setDescription('**Nation Options:**')
    .addField('**United States**:', 'Joins the United States Nation.')
    .addField('**United Kingdom**:', 'Joins the United Kingdom nation.')
    .addField('**China**:', 'Joins the China nation.')

		.setFooter('Note: Nations are case sensitive. All words begin with an uppercase character.')

   member.send(embed).then(function(message) {
    message.channel.awaitMessages(response => response.author.id === member.id, {
      max: 1,
      time: 10000,
      errors: ['time'],
     })
     .then((collected) => {

      if (collected.first().content === 'United States') {
       const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Successfully Joined.')
        .setDescription("Well done. You've successfully joined your country, making it a stronger and better place.")
       member.send(embed)
			   const alert = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('New Citizen.')
        .setDescription(`Looks like you have a new user for your nation! Be sure to give a happy welcome to **${member.user.tag}**.`)
				client.channels.cache.get('707700644655398942').send(alert)

       let useriden = member.id
       const guild = client.guilds.cache.get('694236382343725147')
       guild.members.cache.get(useriden).roles.add('707677775774875751')
      } else {

      if (collected.first().content === 'United Kingdom') {
       const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Successfully Joined.')
        .setDescription("Well done. You've successfully joined your country, making it a stronger and better place.")
       member.send(embed)
			   const alert = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('New Citizen.')
        .setDescription(`Looks like you have a new user for your nation! Be sure to give a happy welcome to **${member.user.tag}**.`)
				client.channels.cache.get('707700672631668846').send(alert)			 
       let useriden = member.id
       const guild = client.guilds.cache.get('694236382343725147')
       guild.members.cache.get(useriden).roles.add('707699504593240144')
      } else {

      if (collected.first().content === 'China') {
       const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Successfully Joined.')
        .setDescription("Well done. You've successfully joined your country, making it a stronger and better place.")
       member.send(embed)
			   const alert = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('New Citizen.')
        .setDescription(`Looks like you have a new user for your nation! Be sure to give a happy welcome to **${member.user.tag}**.`)
				client.channels.cache.get('707700696878678046').send(alert)			 
       let useriden = member.id
       const guild = client.guilds.cache.get('694236382343725147')
       guild.members.cache.get(useriden).roles.add('707699568262774794')
      }	else {


				
				 const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("You didn't specify a nation.")
				.setDescription('To comply with server guidelines, you must use an alternative route to rep your nation. Use the **$neednation** command in the <#700420367671623851> channel for more information.')

       member.send(embed)
			}
			}}
     })
		 .catch(err => console.log(err))
     .catch(function() {
  			 const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("You didn't specify a nation.")
				.setDescription('To comply with server guidelines, you must use an alternative route to rep your nation. Use the **$neednation** command in the <#700420367671623851> channel for more information.')

       member.send(embed)
     });
   });
  }
  declaredAsAsync()
 }


);

client.on('message', message => {
 if (message.author.bot) return;
 if (!message.guild) return;
 let last = db.get(`l${message.author.id}`) || 0;
 if ((Date.now() - last) < (interval.seconds * 1000)) return;
 let votes = db.get(message.author.id) || 0;
 db.set(message.author.id, parseFloat(parseFloat(votes + interval.gain).toFixed(2)));
 db.set(`l${message.author.id}`, Date.now());
});
client.login(config.token);