const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
module.exports = {
  name: "invite",
  description: "ArdaDemr - Youtube", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\[Beni Sunucuna Ekle](https://discord.com/api/oauth2/authorize?client_id=886966063248576513&permissions=8&scope=bot)\n
`)
                       .setColor("ffc300")
                      )    
}
} 