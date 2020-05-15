const { AkairoClient, CommandHandler } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db');
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

client.login('NzEwOTM2NzI5Mjg0MjQ3NzE2.Xr7tkw.-z-QJPPs9rZSPQx3a_tWImmDvT0');
