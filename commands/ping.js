module.exports = (client, discord) => { // 修正: clientとdiscordを引数として受け取る
    const s4d = {
        client,
        Discord: discord
    };

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (s4dmessage.content === '/arona ping') { // 修正: 条件を正確に一致するように変更
            s4dmessage.channel.send('pong!');
        }
    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if (((((s4dmessage.content) || '').startsWith('ハメ' || '')) || (((s4dmessage.content) || '').startsWith('あろ' || ''))) && (String((s4dmessage.content)).includes(String('おはよ')))) {
              s4dmessage.channel.send('おはようだハメ！');
        }
        });
        

    return {
        name: 'ping',
        execute(message, args) {
            // コマンドの実行処理をここに記述します
            // message, argsなどの引数を利用して処理を実装してください
        }
    };
};

const mySecret = process.env['DISCORD_TOKEN']