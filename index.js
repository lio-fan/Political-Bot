const { AkairoClient, CommandHandler } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db');
let interval = {
 seconds: 30,
 gain: 0.05
};


const config = require('./config.json');
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