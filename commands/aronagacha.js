module.exports = (client, discord) => { // 修正: clientとdiscordを引数として受け取る
    const s4d = {
        client,
        Discord: discord
    };

        s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.content === 'i!arona gacha') {
  let gacha_results = [];
  for (let count = 0; count < 9; count++) {
    const gacha_random = Math.random() * 1000;
    if (gacha_random < 7) {
      gacha_results.push(process.env.BPICK);
    } else if (gacha_random < 30) {
      gacha_results.push(process.env.BSSR);
    } else if (gacha_random < 215) {
      gacha_results.push(process.env.BSR);
    } else {
      gacha_results.push(process.env.BR);
    }
  }
  const gacha_random = Math.random() * 1000;
  if (gacha_random < 7) {
    gacha_results.push(process.env.BPICK);
  } else if (gacha_random < 30) {
    gacha_results.push(process.env.BSSR);
  } else {
    gacha_results.push(process.env.BSR);
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
