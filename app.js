const Discord = require("discord.js");
const bot = new Discord.Client();
require("dotenv").config()

bot.on("ready", () => {
    const guild = bot.guilds.cache.get(process.env.MainGuildID);
    
    let readyMessage = process.env.StartBotMessage
        .replace(`$0`, bot.user.username)
        .replace(`$1`, bot.guilds.cache.size)
        .replace(`$2`, bot.users.cache.size)
        .replace(`$3`, bot.channels.cache.size)
        .replace(`$4`, guild.name)

    console.log(readyMessage);
    bot.user.setActivity(process.env.BotStatus, {"type": process.env.TypeStatus});
        
    if(process.env.SetGuild){
        bot.user.setAvatar(guild.iconURL());
        bot.user.setUsername(guild.name);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if(message.channel.id === process.env.MemeChatID){
        message.react(process.env.ReactGood);
        message.react(process.env.ReactShit);
    }
});

bot.on("guildMemberAdd", member => {
    member.roles.add([`${process.env.RoleAddOne}`, `${process.env.RoleAddTwo}`]);
});

bot.login(process.env.BotToken);