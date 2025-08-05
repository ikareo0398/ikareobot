const { Client, Intents, MessageEmbed } = require('discord.js');
module.exports = (client, discord) => { // 修正: clientとdiscordを引数として受け取る
    const s4d = {
        client,
        Discord: discord
    };


client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    const modifiedContent = message.content.replace(/https:\/\/x\.com\//g, 'https://vxtwitter.com/')
                                           .replace(/https:\/\/twitter\.com\//g, 'https://vxtwitter.com/');

    if (modifiedContent !== message.content) {
        message.reply({
          content:`${modifiedContent}`,
           allowedMentions: {
             parse: []
           }
    });
    }
  const beforeMessage = await message.channel.messages.fetch({ before: message.id, limit: 1 })
     .then(messages => messages.first())
     .catch(console.error)

  message.suppressEmbeds(false)
});

    return {
        name: 'ping',
        execute(message, args) {
            // コマンドの実行処理をここに記述します
            // message, argsなどの引数を利用して処理を実装してください
        }
    };
};
