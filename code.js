const { Client, GatewayIntentBits , EmbedBuilder } = require('discord.js');
const discord = require('discord.js');
require("discord-reply");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});
const options = { intents: ["GUILDS", "GUILD_MESSAGES"] };

client.on('ready', () => {
  console.log('🐈code.jsが正常に起動したにゃ');
     client.user.setActivity(process.env.activity, { type: process.env.acttype }); 
});

//GIFBOT
client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content === 'i!GIF') {
      const embed = new EmbedBuilder()
          .setTitle('GIF一覧')
          .setDescription('GIF一覧')
          .addFields(
            {
        name: "草",
        value: "https://tenor.com/view/grass-gif-6112271"
      },
      {
        name: "さかなー",
        value: "https://tenor.com/view/%E3%81%95%E3%81%8B%E3%81%AA%E3%83%BC-%E3%83%AA%E3%82%B3%E3%83%AA%E3%82%B3-gif-26307860"
      },
      {
        name: "ちんあなごー",
        value: "https://tenor.com/view/anime-spotted-garden-eel-dance-lycoris-recoil-gif-26293035"
      },
      {
        name: "ﾆﾔ",
        value: "https://tenor.com/view/spy-x-family-anya-anya-forger-anya-spy-x-family-anya-spy-x-family-anime-gif-25679849"
      },
      {
        name: "ワッカ",
        value: "https://tenor.com/view/wakka-ffx-doubt-glaring-gif-18415878"
      },
      {
        name: "気持ち良すぎだろ！",
        value: "https://tenor.com/view/wakka-tedus-ff-ff-x-10-gif-1344735738209189254"
      },
      {
       name: "音ゲー",
        value: "https://tenor.com/view/angry-anime-gif-5703127"
      },
      {
        name: "春日部つむぎ",
        value: "https://tenor.com/view/%E8%B8%8A%E3%82%8B%E6%98%A5%E6%97%A5%E9%83%A8%E3%81%A4%E3%82%80%E3%81%8E-tumugi-%E5%9F%BC%E7%8E%89-gif-25927478"
      },
      {
        name: "紲星あかり",
        value: "https://tenor.com/view/%E7%B4%B2%E6%98%9F%E3%81%82%E3%81%8B%E3%82%8A-gif-25670346"
      },
      {
        name: "クルミ",
        value: "https://c.tenor.com/F-6jpScSA50AAAAd/lycoris-recoil-kurumi.gif"
      },
      {
        name: "ずんだ",
        value: "https://tenor.com/view/%E3%81%9A%E3%82%93%E3%81%A0%E3%82%82%E3%82%93-%E3%81%B8%E3%81%93%E3%81%B8%E3%81%93-gif-25604642(https://cdn.discordapp.com/attachments/778566833968119848/1007904916901208084/IMG_3381.png)"
      },  
      {
        name: "確変ZU☆N☆DA",
        value: process.env.ZUNDA
      }  
          )
          message.channel.send({ embeds: [embed] });
        }
  if (message.content === 'i!gacha') {
      const embed = new EmbedBuilder()
          .setTitle('ガチャ一覧')
          .setDescription('ガチャ一覧')
          .addFields(
            {
        name: "i!arona gacha",
        value: "ブルアカ通常募集"
      },
      {
        name: "i!arona gacha6",
        value: "ブルアカ周年ガチャ"
      },
      {
        name: "i!pj gacha",
        value: "プロセカ通常ガチャ"
      },
      {
        name: "i!pj gacha6",
        value: "プロセカ周年ガチャ"
      }
          )
          message.channel.send({ embeds: [embed] });

  }
 if (message.content === '草') {
	message.react(process.env.KUSA);
  }
   if (message.content === 'さかなー') {
    message.channel.send('https://tenor.com/view/%E3%81%95%E3%81%8B%E3%81%AA%E3%83%BC-%E3%83%AA%E3%82%B3%E3%83%AA%E3%82%B3-gif-26307860');
  }
  if (message.content === 'ちんあなごー') {
    message.channel.send('https://tenor.com/view/anime-spotted-garden-eel-dance-lycoris-recoil-gif-26293035');
  }
  if (message.content === 'ﾆﾔ') {
    message.channel.send('https://tenor.com/view/spy-x-family-anya-anya-forger-anya-spy-x-family-anya-spy-x-family-anime-gif-25679849');
  }
  if (message.content === 'ワッカ') {
    message.channel.send('https://tenor.com/view/wakka-ffx-doubt-glaring-gif-18415878');
  }
  if (message.content === '気持ち良すぎだろ！') {
    message.channel.send('https://tenor.com/view/wakka-tedus-ff-ff-x-10-gif-1344735738209189254');
  }
  if (message.content === '音ゲー') {
    message.channel.send('https://tenor.com/view/angry-anime-gif-5703127');
  }
  if (message.content === '春日部つむぎ') {
    message.channel.send('https://tenor.com/view/%E8%B8%8A%E3%82%8B%E6%98%A5%E6%97%A5%E9%83%A8%E3%81%A4%E3%82%80%E3%81%8E-tumugi-%E5%9F%BC%E7%8E%89-gif-25927478');
  }
  if (message.content === '紲星あかり') {
    message.channel.send('https://tenor.com/view/%E7%B4%B2%E6%98%9F%E3%81%82%E3%81%8B%E3%82%8A-gif-25670346');
  }
  
  if (message.content === 'クルミ') {
    message.channel.send('https://c.tenor.com/F-6jpScSA50AAAAd/lycoris-recoil-kurumi.gif');
  }

  if (message.content === '確変ZU☆N☆DA') {
    message.channel.send(process.env.ZUNDA);
  }

  if (message.content === "!izundagacha"){
    const gacha_random = Math.random() * 100;
    if (gacha_random <=5){
  message.channel.send("https://tenor.com/view/%E3%81%9A%E3%82%93%E3%81%A0%E3%82%82%E3%82%93-%E3%81%B8%E3%81%93%E3%81%B8%E3%81%93-gif-25604642");
  } else {
    message.channel.send(process.env.ZUNDA)
  }
  }

  if (message.content === "i!zundagacha"){
    const gacha_random = Math.random() * 100;
  if (gacha_random <=5){
  message.channel.send(process.env.ZUNDA);
  } else {
    message.channel.send("https://tenor.com/view/%E3%81%9A%E3%82%93%E3%81%A0%E3%82%82%E3%82%93-%E3%81%B8%E3%81%93%E3%81%B8%E3%81%93-gif-25604642")
  }
}
  
  if (message.content === 'ずんだ') {
    message.channel.send('https://tenor.com/view/%E3%81%9A%E3%82%93%E3%81%A0%E3%82%82%E3%82%93-%E3%81%B8%E3%81%93%E3%81%B8%E3%81%93-gif-25604642');
  }
  
  if (message.content === 'BAN'){
    
    if(!process.env.OWNERID.includes(message.author.id))
      return message.channel.send('残念だったなぁ');
 message.channel.send('https://tenor.com/view/among-us-ban-among-us-ban-imposter-ban-gif-18884723')
  } 

  if (message.content === '神'){
    
    if(!process.env.OWNERID.includes(message.author.id))
      message.channel.send('https://tenor.com/view/funny-laugh-gif-23674005')
    if(!process.env.OWNERID.includes(message.author.id))
        return message.channel.send('↑お前。調子乗んなよ?');
    
 message.channel.send('https://tenor.com/view/jesus-god-love-bless-you-gif-11461432')
    message.channel.send('Oh....神よ...')
  } 
  
  if (message.content === 'test') {
    message.channel.send('test');
  }

});

  
//ランダム文字ボット
const arr = ["あ", "い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん","が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど","ば","び","ぶ","べ","ぼ","ゃ","っ","ゅ","ょ","ぁ","ぃ","ぅ","ぇ","ぉ","ぱ","ぴ","ぷ","ぺ","ぽ"];
setInterval(function () {client.channels.cache.get(process.env.SIXCH).send(arr[Math.floor(Math.random() * arr.length)] + arr[Math.floor(Math.random() * arr.length)] + arr[Math.floor(Math.random() * arr.length)]
  )}, 60000)
setInterval(function () {client.channels.cache.get(process.env.THREECH).send(arr[Math.floor(Math.random() * arr.length)] + arr[Math.floor(Math.random() * arr.length)] + arr[Math.floor(Math.random() * arr.length)] + arr[Math.floor(Math.random() * arr.length)]
  )}, 30000)



client.login(process.env.DISCORD_TOKEN);
