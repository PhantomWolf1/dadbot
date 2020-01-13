const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");

bot.on("ready", () => {
  console.log("Reed is a nerd.");
})

bot.on("message", message => {
  if(message.content.startsWith("I'm")) {
    message.channel.send(`Hi ${message.content.pop("I'm")}, I'm dad.`)
  }
});

bot.login(process.env.TOKEN)
