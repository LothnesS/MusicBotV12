const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
module.exports = {
  name: "yardım",
  description: "ArdaDemr - Youtube", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
  .setTitle("Froxy Music Yardım Menüsü")
  .setURL("https://discord.gg/dA8BEGn6wf")
                      .setDescription(
    `
\`${ayarlar.PREFIX}play <şarkı-adı>\` : **Belirtilen Şarkıyı Çalar** \n
\`${ayarlar.PREFIX}skip\` : **Sıradaki Şarkıya Geçer**\n
\`${ayarlar.PREFIX}loop\` : **Çalan Şarkıyı Sürekli Tekrarlar**\n
\`${ayarlar.PREFIX}stop\` : **Şarkıyı Durdurur**\n
\`${ayarlar.PREFIX}resume\` : **Durdurulan Şarkıyı Devam Ettirir**\n
\`${ayarlar.PREFIX}queue\` : **Şarkı Sırasını Gösterir**\n
\`${ayarlar.PREFIX}current\` : **Oynatılan Şarkının Bilgilerini Verir**\n
\`${ayarlar.PREFIX}invite\` : **Botun Davet Bağlantısını Atar**\n\nBeni Davet Etmek İçin **[Buraya Tıkla](https://discord.com/api/oauth2/authorize?client_id=886966063248576513&permissions=8&scope=bot)**\nDestek Sunucuma Katılmak İçin **[Buraya Tıkla](https://discord.gg/dA8BEGn6wf)**`)
.setThumbnail(message.author.avatarURL())
.setImage("https://media.discordapp.net/attachments/889591995864059954/890719133463887942/20210924_005941.png")
                       .setColor("ffc300")
                      )    
}
} 