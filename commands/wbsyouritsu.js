const { Client } = require('pg'); 
module.exports = (botClient, discord) => {
    const s4d = { client: botClient, Discord: discord };

    // 記録を許可するチャンネルIDを環境変数から取得
    const allowedChannels = process.env.WBCID.split(",").map(id => id.trim());

    // PostgreSQL クライアント設定
    const pgClient = new Client({
        connectionString: process.env.DATABASE_URL, // Render の環境変数
        ssl: { rejectUnauthorized: false } // Render では SSL 必須
        //ssl: false // ローカル開発用に SSL を無効化
    });

    pgClient.connect().catch(console.error);

    // テーブル作成（存在しない場合）
    pgClient.query(`
        CREATE TABLE IF NOT EXISTS records (
            id SERIAL PRIMARY KEY,
            channel_id TEXT NOT NULL,
            user_id TEXT NOT NULL,
            result TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT NOW()
        );
    `).catch(console.error);

    s4d.client.on('messageCreate', async (msg) => {
        if (msg.author.bot || !msg.guild) return;
        if (!allowedChannels.includes(msg.channel.id)) return;

        const content = msg.content.trim();
        const channelId = msg.channel.id;
        const userId = msg.author.id;

        // 勝ち負け記録
        if (content.startsWith("勝ち") || content.startsWith("負け")) {
            const result = content.startsWith("勝ち") ? "勝ち" : "負け";

            try {
                // 1. レコード追加
                await pgClient.query(
                    'INSERT INTO records (channel_id, user_id, result) VALUES ($1, $2, $3)',
                    [channelId, userId, result]
                );

                // 2. 最新20件のみ保持
                const res = await pgClient.query(
                    'SELECT id FROM records WHERE channel_id=$1 AND user_id=$2 ORDER BY created_at DESC',
                    [channelId, userId]
                );

                if (res.rows.length > 20) {
                    const excessIds = res.rows.slice(20).map(r => r.id);
                    await pgClient.query(
                        'DELETE FROM records WHERE id = ANY($1::int[])',
                        [excessIds]
                    );
                }

            } catch (err) {
                console.error("DB挿入エラー:", err);
            }

            // 👍 リアクション
            try { await msg.react('👍'); } catch (e) { console.error(e); }
            return;
        }

        // 記録表示
        if (/^i! 記録$/i.test(content)) {
            try {
                const res = await pgClient.query(
                    'SELECT result FROM records WHERE channel_id=$1 AND user_id=$2',
                    [channelId, userId]
                );

                if (res.rows.length === 0) {
                    msg.channel.send("使用した記録はありません。");
                    return;
                }

                const winCount = res.rows.filter(r => r.result === '勝ち').length;
                const loseCount = res.rows.filter(r => r.result === '負け').length;

                msg.channel.send(`直近${res.rows.length}回の結果\n勝ち: ${winCount}回\n負け: ${loseCount}回`);
            } catch (err) {
                console.error("DB取得エラー:", err);
            }
            return;
        }

        // 記録リセット
        if (/^i! 記録 リセット$/i.test(content)) {
            try {
                await pgClient.query(
                    'DELETE FROM records WHERE channel_id=$1 AND user_id=$2',
                    [channelId, userId]
                );
                msg.channel.send("このチャンネルでのあなたの記録をリセットしました。");
            } catch (err) {
                console.error("DB削除エラー:", err);
            }
            return;
        }
    });

    return {
        name: 'record',
        execute(message, args) { }
    };
};
