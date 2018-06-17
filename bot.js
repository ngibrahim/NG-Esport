const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  hoş geldin ^^');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

client.on('message', msg => {
  if (msg.content === 'amk') {
   msg.delete(30)
    msg.reply('Kufur Engelendi');
  }
});

client.on('message', msg => {
  if (msg.content === 'oç') {
   msg.delete(30)
    msg.reply('Kufur Engelendi');
  }
});

client.on('message', msg => {
  if (msg.content === 'Amk') {
   msg.delete(30)
    msg.reply('Kufur Engelendi');
  }
});

client.on('message', msg => {
  if (msg.content === 'Mk') {
   msg.delete(30)
    msg.reply('Kufur Engelendi');
  }
});

client.on('message', msg => {
  if (msg.content === 'mk') {
   msg.delete(30)
    msg.reply('Kufur Engelendi');
  }
});

client.on('message', msg => {
  if (msg.content === 'O.çocuğu') {
   msg.delete(30)
    msg.reply('Kufur Engelendi');
  }
});

client.on('message', msg => {
  if (msg.content === 'sg') {
   msg.delete(30)
    msg.reply('Kendin Sİktir');
  }
});

client.on('message', msg => {
  if (msg.content === 'Amcık') {
   msg.delete(30)
    msg.reply('Kufur Engelendi');
  }
});

client.on('message', msg => {
  if (msg.content === 'amcık') {
   msg.delete(30)
    msg.reply('Kufur Engelendi');
  }
});

client.on('message', msg => {
  if (msg.content === 'Yarram') {
   msg.delete(30)
    msg.reply('Kufur Engelendi');
  }
});

client.on('message', msg => {
  if (msg.content === 'yarram') {
   msg.delete(30)
    msg.reply('Kufur Engelendi');
  }
});

client.on('message', msg => {
  if (msg.content === 'Sg') {
   msg.delete(30)
    msg.reply('Kendin Sİktir');
  }
});

client.on('message', msg => {
  if (msg.content === 'discord.gg') {
   msg.delete(30)
    msg.reply('Bidaha Reklam Yaparsan Seni Sike Sike Gebertirim');
  }
});

client.on('message', msg => {
  if (msg.content === 'https://discord.gg/') {
   msg.delete(30)
    msg.reply('Bidaha Reklam Yaparsan Seni Sike Sike Gebertirim');
  }
});

client.on('message', msg => {
  if (msg.content === 'anan') {
   msg.delete(30)
    msg.reply('Yok Baban');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'kaç cm') {
    msg.reply('1metre 10cm ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'dünya nüfusu') {
    msg.reply('7Milyar Yok Devenin Amı ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'discord nüfusumuz') {
    msg.reply('Sanki 10K Kişi Varmış Gibi Söylemiyom Lann ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bot') {
    msg.reply('Efendim ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nasılsın') {
    msg.reply('İyi Sen ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi') {
    msg.reply('Süper ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aylık nekadar para alıyosun') {
    msg.reply('89394932492349$ ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Günaydın') {
    msg.reply('Sanada Günaydın Bugün Nasısın ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'günaydın') {
    msg.reply('Sanada Günaydın Bugün Nasısın ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Aylık nekadar para alıyosun') {
    msg.reply('89394932492349$ ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'İyi') {
    msg.reply('Süper ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Nasılsın') {
    msg.reply('İyi Sen ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Bot') {
    msg.reply('Efendim ^^');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Berşah') {
    msg.reply('O Tam Bir Adam En IYi kisi :middle_finger: ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'berşah') {
    msg.reply('O Tam Bir Adam En IYi kisi :middle_finger: ');
  }
});
