module.exports = (client, discord) => { // 修正: clientとdiscordを引数として受け取る
    const s4d = {
        client,
        Discord: discord
    };

        s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.content === 'i!pj gacha') {
  let gacha_results = [];
  for (let count = 0; count < 9; count++) {
    const gacha_random = Math.random() * 1000;
    if (gacha_random < 12) {
      gacha_results.push(process.env.PPICK);
    } else if (gacha_random < 30) {
      gacha_results.push(process.env.PSSR);
    } else if (gacha_random < 115) {
      gacha_results.push(process.env.PSR);
    } else {
      gacha_results.push(process.env.PR);
    }
  }
  const gacha_random = Math.random() * 1000;
  if (gacha_random < 12) {
    gacha_results.push(process.env.PPICK);
  } else if (gacha_random < 30) {
    gacha_results.push(process.env.PSSR);
  } else {
    gacha_results.push(process.env.PSR);
  }

  let messageContent = '';
  for (let i = 0; i < gacha_results.length; i++) {
    if (i > 0 && i % 5 === 0) {
      messageContent += '\n';
    }
    messageContent += gacha_results[i] + ' ';
  }

  s4dmessage.channel.send({
    content: messageContent
  });
}





    });

    return {
        name: 'gacha',
        execute(message, args) {
            // コマンドの実行処理をここに記述します
            // message, argsなどの引数を利用して処理を実装してください
        }
    };

};


const mySecret = process.env['DISCORD_TOKEN']
