const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + '31 Cekti!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://www.google.az/imgres?imgurl=http%3A%2F%2Fthecontextofthings.com%2Fwp-content%2Fuploads%2F2017%2F08%2Frandom-sex-thing-i-wrote.jpg&imgrefurl=http%3A%2F%2Fthecontextofthings.com%2F2017%2F08%2F22%2Fnews-flash-bunch-sexual-history-will-transactional%2F&docid=YxfUA5I5rIKIrM&tbnid=96iTFpW6Sju6PM%3A&vet=10ahUKEwipn8XW0NrbAhWLXSwKHRrbA-4QMwgsKAkwCQ..i&w=960&h=640&client=opera&bih=219&biw=1113&q=sex&ved=0ahUKEwipn8XW0NrbAhWLXSwKHRrbA-4QMwgsKAkwCQ&iact=mrc&uact=8`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'if',
  description: '31 ceker.',
  usage: 'if'
};
