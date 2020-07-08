const Discord = require("discord.js");
const bot = new Discord.Client();
const setting = require("./settings.json");

bot.on("ready", () => {
    const guild = bot.guilds.cache.get(setting.guildID);
    
    let readyMessage = setting.startMessage
        .replace(`$0`, bot.user.username)
        .replace(`$1`, bot.guilds.cache.size)
        .replace(`$2`, bot.users.cache.size)
        .replace(`$3`, bot.channels.cache.size)
        .replace(`$4`, guild.name)

    console.log(readyMessage);
    bot.user.setActivity(setting.status, {"type": setting.typeStatus});
        
    if(setting.setDefault){
        bot.user.setAvatar(guild.iconURL());
        bot.user.setUsername(guild.name);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.id === setting.memesChat){
        message.react(setting.reactGood);
        message.react(setting.reactShit);
    }
});

bot.login(setting.token);