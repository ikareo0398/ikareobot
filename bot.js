const options = { intents: ["GUILDS", "GUILD_MESSAGES"] };
const discord = require("discord.js");
const prefix = "%%";
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});
const fs = require("fs");

client.commands = new discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)(client, discord); // 修正: clientとdiscordを引数として渡す
    client.commands.set(command.name, command);
    console.log(`🐈${file} が正常に起動したにゃ`);
}

client.on("messageCreate", async message => {
    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if (!client.commands.has(command)) return;
  
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('An error occurred while executing the command.');
    }
});

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
    console.log(`🐈bot.jsが正常に起動したにゃ`);
});

client.on('ready', message => {
    client.user.setPresence({ game: { name: 'シッテムの箱' } });
});

const mySecret = process.env['DISCORD_TOKEN']