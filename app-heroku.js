const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    const guild = bot.guilds.cache.get(process.env.guildID);
    
    let readyMessage = process.env.startMessage
        .replace(`$0`, bot.user.username)
        .replace(`$1`, bot.guilds.cache.size)
        .replace(`$2`, bot.users.cache.size)
        .replace(`$3`, bot.channels.cache.size)
        .replace(`$4`, guild.name)

    console.log(readyMessage);
    bot.user.setActivity(process.env.status, {"type": process.env.typeStatus});
        
    if(process.env.setDefault){
        bot.user.setAvatar(guild.iconURL());
        bot.user.setUsername(guild.name);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.id === process.env.memesChat){
        message.react(process.env.reactGood);
        message.react(process.env.reactShit);
    }
});

bot.on("guildMemberAdd", member => {
    member.roles.add(["621026454586654760", "621026147282452501"]);
});

bot.login(process.env.token);