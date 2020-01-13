const Discord = require("discord.js");
const bot = new Discord.Client();
cosnt fs = require("fs");

bot.on("ready", () => {
  console.log("Reed is a nerd.");
})

bot.on("message", message => {
  if(message.startsWith("I'm")) {
    message.channel.send(`Hi ${message.content}, I'm dad.`)
  }
});

bot.login(process.env.TOKEN)
