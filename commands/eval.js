const { Command } = require('discord-akairo');
const Discord = require('discord.js')
class EvalCommand extends Command {
    constructor() {
        super('eval', {
           aliases: ['eval'] 
        });
    }
    
async exec (message) {
let args = message.content.slice('$'.length).split(/ +/);

const config = require('config.json');

function formatEvalResult(cmd, result, color, e = false) {
  const embed = new Discord.MessageEmbed()
	.setColor(color)
  .addField("Eval", "```js\n" + cmd + "```")
  .addField(e ? "Error": "Result", "```js\n" + result + "```");
  return embed;
}

      const msg = message;
      const guild = msg.guild;
      const channel = msg.channel;
      const cmd = msg.content.substring(('$' + "eval").length + 1);
      let result = eval(cmd);
      if (result instanceof Promise) {
        result = await result;
      }
      channel.send(formatEvalResult(cmd, result, 0x00FF00));
    } catch (e) {
      channel.send(formatEvalResult(cmd, result, 0xFF0000, true));
    }
  }
 

module.exports = EvalCommand;