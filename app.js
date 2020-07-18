const Discord = require("discord.js");
const bot = new Discord.Client();
const pkg = require("./package.json");
require("dotenv").config();

bot.on("ready", () => {
    const guild = bot.guilds.cache.get(process.env.MainGuildID);
    
    let readyMessage = process.env.StartBotMessage
        .replace(`$0`, bot.user.username)
        .replace(`$1`, bot.guilds.cache.size)
        .replace(`$2`, bot.users.cache.size)
        .replace(`$3`, bot.channels.cache.size)
        .replace(`$4`, guild.name)
        .replace(`$5`, pkg.version)
        .replace(`$6`, pkg.description)
        .replace(`$7`, pkg.homepage)

    console.log(readyMessage);
    bot.user.setActivity(process.env.BotStatus, {"type": process.env.TypeStatus, "url": `${process.env.TypeURL}`});
        
    if(process.env.SetGuild == "true"){
        bot.user.setAvatar(guild.iconURL());
        bot.user.setUsername(guild.name);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if(process.env.MemeReactions == "true"){
        if(message.channel.id === process.env.MemeChatID){
            message.react(process.env.ReactUP);
            message.react(process.env.ReactDOWN);
        }
    }else if(process.env.ColorReactions == "true"){
        if(message.channel.id === process.env.MemeChatID){
            message.react(process.env.ColorRed);
            message.react(process.env.ColorGreen);
            message.react(process.env.ColorBlue);
        }
    }
});

bot.on("guildMemberAdd", member => {
    const guild = bot.guilds.cache.get(process.env.MainGuildID);
    
    if(process.env.RoleAdds == "true"){
        if(process.env.NumberRoles == "1"){
            member.roles.add(`${process.env.RoleAddOne}`);
        }else if(process.env.NumberRoles == "2"){
            member.roles.add([`${process.env.RoleAddOne}`, `${process.env.RoleAddTwo}`]);
        }
    }
    
    if(process.env.WelcomeMessage == "true"){
        let WelcomeMSG = process.env.UserMessage
            .replace(`$0`, member.user.username)
            .replace(`$1`, member.user.id)
            .replace(`$2`, member.user.avatarURL({dynamic: true, size: 4096}))
            .replace(`$3`, guild.name)
            .replace(`$4`, guild.iconURL({dynamic: true, size: 4096}))
            .replace(`$5`, guild.memberCount)
            .replace(`$6`, guild.owner.nickname)
        
        member.send(WelcomeMSG);
    }
});

bot.login(process.env.BotToken);