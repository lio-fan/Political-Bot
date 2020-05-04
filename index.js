const { AkairoClient, CommandHandler } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db');
const config = require('./config.json');
class MyClient extends AkairoClient {
    constructor() {
        super({
            ownerID: '123992700587343872', // or ['123992700587343872', '86890631690977280']
        }, {
            disableEveryone: true
        });
				this.commandHandler = new CommandHandler(this, {
 			  	 directory: './commands/',
 			  	 prefix: '$' // or ['?', '!']

				});
				this.commandHandler.loadAll();

    }

}
const client = new MyClient();
client.login(config.token);