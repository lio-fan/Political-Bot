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

client.login(config.token);
