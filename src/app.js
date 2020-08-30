const setting = require("./settings.json");
const pkg = require("../package.json");
const { Client, MessageEmbed } = require("discord.js");
const lang = require(`./lang/${setting.lang}.json`);
const bot = new Client({disableMentions: setting.disableMentions});
bot.login(setting.token);

bot.on("ready", async () => {
    if(setting.botOn.enable){
        if(setting.botOn.WelcomeMessage.enable){
            if(!setting.botOn.WelcomeMessage.ConsoleMSG) return console.error(lang.NoConsoleMSG);

            let ConsoleMessage = setting.botOn.WelcomeMessage.ConsoleMSG
                .replace("{0}", bot.user.id)
                .replace("{1}", bot.user.bot)
                .replace("{2}", bot.user.bot ? lang.Yes : lang.No)
                .replace("{3}", bot.user.username)
                .replace("{4}", bot.user.discriminator)
                .replace("{5}", await (await bot.fetchApplication()).description)
                .replace("{6}", await (await bot.fetchApplication()).botPublic)
                .replace("{7}", await (await bot.fetchApplication()).botPublic ? lang.Yes : lang.No)
                .replace("{8}", await (await bot.fetchApplication()).botRequireCodeGrant)
                .replace("{9}", await (await bot.fetchApplication()).botRequireCodeGrant ? lang.Yes : lang.No)
                .replace("{10}", await (await bot.fetchApplication()).owner.id)
                .replace("{11}", await (await bot.fetchApplication()).owner.username)
                .replace("{12}", await (await bot.fetchApplication()).owner.discriminator)
                .replace("{13}", pkg.version)
                .replace("{14}", pkg.author)
                .replace("{15}", pkg.url)
                .replace("{16}", bot.guilds.cache.size)
                .replace("{17}", bot.channels.cache.size)
                .replace("{18}", bot.users.cache.size)
                .replace("{19}", bot.shard.ids)

            console.log(ConsoleMessage);
        }

        if(setting.botOn.botActivity.enable){
            if(setting.botOn.botActivity.botType.toUpperCase() === "STREAMING" & !setting.botOn.botActivity.botURL) return console.error(lang.NoStreamURL);
            if(!setting.botOn.botActivity.botType) return console.error(lang.NoBotType);
            if(!setting.botOn.botActivity.botStatus) return console.error(lang.NoBotStatus);
            if(!setting.botOn.botActivity.botURL) return console.error(lang.NoBotURL);
            if(!setting.botOn.botActivity.botMessage) return console.error(lang.NoBotMessage);

            let BotPresenceMessage = setting.botOn.botActivity.botMessage
                .replace("{0}", bot.user.id)
                .replace("{1}", bot.user.bot)
                .replace("{2}", bot.user.bot ? lang.Yes : lang.No)
                .replace("{3}", bot.user.username)
                .replace("{4}", bot.user.discriminator)
                .replace("{5}", await (await bot.fetchApplication()).description)
                .replace("{6}", await (await bot.fetchApplication()).botPublic)
                .replace("{7}", await (await bot.fetchApplication()).botPublic ? lang.Yes : lang.No)
                .replace("{8}", await (await bot.fetchApplication()).botRequireCodeGrant)
                .replace("{9}", await (await bot.fetchApplication()).botRequireCodeGrant ? lang.Yes : lang.No)
                .replace("{10}", await (await bot.fetchApplication()).owner.id)
                .replace("{11}", await (await bot.fetchApplication()).owner.username)
                .replace("{12}", await (await bot.fetchApplication()).owner.discriminator)
                .replace("{13}", pkg.version)
                .replace("{14}", pkg.author)
                .replace("{15}", pkg.url)
                .replace("{16}", bot.guilds.cache.size)
                .replace("{17}", bot.channels.cache.size)
                .replace("{18}", bot.users.cache.size)
                .replace("{19}", bot.shard.ids)

            bot.user.setPresence({activity: {name: BotPresenceMessage, url: setting.botOn.botActivity.botURL, type: setting.botOn.botActivity.botType.toUpperCase()}, status: setting.botOn.botActivity.botStatus});
        }

        if(setting.botOn.botStats.enable){
            if(setting.shardCreate.enable){
                console.log("[+] SHARDCREATE");
                console.log(` - ${lang.NumberShards.toUpperCase()}: ${setting.shardCreate.shardNumbers}`);
            }
            
            if(setting.botOn.enable){
                console.log("[+] READY EVENT");
                console.log(` - ${lang.DisabledTypeMentions.toUpperCase()}: ${setting.disableMentions}`);
            }

            if(setting.botOn.WelcomeMessage.enable){
                console.log("[+] CONSOLE MESSAGE");
            }

            if(setting.botOn.botActivity.enable){
                console.log("[+] BOT ACTIVITY");
                console.log(` - botType: ${setting.botOn.botActivity.botType.toUpperCase()}`);
                console.log(` - botStatus: ${setting.botOn.botActivity.botStatus}`);
            }

            if(setting.botOn.botStats.enable){
                console.log("[+] BOT STATS");
            }

            if(setting.userJoin.enable){
                console.log("[+] MEMBER JOIN EVENT");
            }

            if(setting.userJoin.RoleGive.enable){
                console.log("[+] ROLE GIVE");
                console.log(` - ${lang.NumberRoles.toUpperCase()}: ${setting.userJoin.RoleGive.roles.length}`);
            }

            if(setting.userJoin.SendMessage.enable){
                console.log("[+] USER WELCOME MESAGE");
                console.log(` - ${lang.MessageType.toUpperCase()}: ${setting.userJoin.SendMessage.type}`);
            }

            if(setting.userJoin.ServerMessage.enable){
                console.log("[+] SERVER WELCOME MESAGE");
                console.log(` - ${lang.MessageType.toUpperCase()}: ${setting.userJoin.ServerMessage.type}`);
            }

            if(setting.userLeave.enable){
                console.log("[+] MEMBER LEAVE EVENT");
            }

            if(setting.userLeave.ServerMessage.enable){
                console.log("[+] SERVER FAREWELL MESAGE");
                console.log(` - ${lang.MessageType.toUpperCase()}: ${setting.userLeave.ServerMessage.type}`);
            }
        }
    }
});

bot.on("guildMemberAdd", member => {
    if(setting.userJoin.enable){
        if(setting.userJoin.RoleGive.enable){
            if(!setting.userJoin.RoleGive.roles) return console.error(lang.NoUserRole);

            member.roles.add(setting.userJoin.RoleGive.roles);
        }

        if(setting.userJoin.SendMessage.enable){
            if(setting.userJoin.SendMessage.type.toUpperCase() === "MESSAGE"){
                if(!setting.userJoin.SendMessage.message) return console.error(lang.NoUserMessage);

                const UserWelcomeMessage = setting.userJoin.SendMessage.message
                    .replace("{0}", bot.user.username)
                    .replace("{1}", member.user.id)
                    .replace("{2}", member.user.bot)
                    .replace("{3}", member.user.bot ? lang.Yes : lang.No)
                    .replace("{4}", member.user.username)
                    .replace("{5}", member.user.discriminator)
                    .replace("{6}", member)
                    .replace("{7}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{8}", member.guild.members.cache.size)
                    .replace("{9}", member.guild.channels.cache.size)
                    .replace("{10}", member.guild.roles.cache.size)
                    .replace("{11}", member.guild.id)
                    .replace("{12}", member.guild.name)
                    .replace("{13}", member.guild.memberCount)
                    .replace("{14}", member.guild.emojis.cache.size)
                    .replace("{15}", member.guild.ownerID)
                    .replace("{16}", bot.users.cache.get(member.guild.ownerID).username)
                    .replace("{17}", bot.users.cache.get(member.guild.ownerID).discriminator)
                    .replace("{18}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{19}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{20}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))

                if(setting.userJoin.SendMessage.deleteMessage){
                    if(!setting.userJoin.SendMessage.timeDelete) return console.error(lang.NoTimeDelete);

                    member.send(UserWelcomeMessage).then(msg => msg.delete({timeout: parseInt(setting.userJoin.SendMessage.timeDelete)}));
                }else{
                    member.send(UserWelcomeMessage);
                }
            }else if(setting.userJoin.SendMessage.type.toUpperCase() === "EMBED"){
                if(!setting.userJoin.SendMessage.EMBED.Color) return console.error(lang.NoEmbedColor); 
                if(!setting.userJoin.SendMessage.EMBED.Title) return console.error(lang.NoEmbedTitle); 
                if(!setting.userJoin.SendMessage.EMBED.URL) return console.error(lang.NoEmbedURL); 
                if(!setting.userJoin.SendMessage.EMBED.Author.name) return console.error(lang.NoEmbedAuthorName); 
                if(!setting.userJoin.SendMessage.EMBED.Author.image) return console.error(lang.NoEmbedAuthorImage); 
                if(!setting.userJoin.SendMessage.EMBED.Author.URL) return console.error(lang.NoEmbedAuthorURL); 
                if(!setting.userJoin.SendMessage.EMBED.Description) return console.error(lang.NoEmbedDescription); 
                if(!setting.userJoin.SendMessage.EMBED.ImageURLSmall) return console.error(lang.NoEmbedImageURLSmall); 
                if(!setting.userJoin.SendMessage.EMBED.Fields) return console.error(lang.NoEmbedFields); 
                if(!setting.userJoin.SendMessage.EMBED.ImageURLBig) return console.error(lang.NoEmbedImageURLBig); 
                if(!setting.userJoin.SendMessage.EMBED.Footer.name) return console.error(lang.NoEmbedFooterName); 
                if(!setting.userJoin.SendMessage.EMBED.Footer.ImageURL) return console.error(lang.NoEmbedFooterImageURL); 

                const EmbedTitle = setting.userJoin.SendMessage.EMBED.Title
                    .replace("{0}", bot.user.username)
                    .replace("{1}", member.user.id)
                    .replace("{2}", member.user.bot)
                    .replace("{3}", member.user.bot ? lang.Yes : lang.No)
                    .replace("{4}", member.user.username)
                    .replace("{5}", member.user.discriminator)
                    .replace("{6}", member)
                    .replace("{7}", member.guild.members.cache.size)
                    .replace("{8}", member.guild.channels.cache.size)
                    .replace("{9}", member.guild.roles.cache.size)
                    .replace("{10}", member.guild.id)
                    .replace("{11}", member.guild.name)
                    .replace("{12}", member.guild.memberCount)
                    .replace("{13}", member.guild.emojis.cache.size)
                    .replace("{14}", member.guild.ownerID)
                    .replace("{15}", bot.users.cache.get(member.guild.ownerID).username)
                    .replace("{16}", bot.users.cache.get(member.guild.ownerID).discriminator)
                    
                const EmbedURL = setting.userJoin.SendMessage.EMBED.URL
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))
                    
                const AuthorName = setting.userJoin.SendMessage.EMBED.Author.name
                    .replace("{0}", bot.user.username)
                    .replace("{1}", member.user.id)
                    .replace("{2}", member.user.bot)
                    .replace("{3}", member.user.bot ? lang.Yes : lang.No)
                    .replace("{4}", member.user.username)
                    .replace("{5}", member.user.discriminator)
                    .replace("{6}", member)
                    .replace("{7}", member.guild.members.cache.size)
                    .replace("{8}", member.guild.channels.cache.size)
                    .replace("{9}", member.guild.roles.cache.size)
                    .replace("{10}", member.guild.id)
                    .replace("{11}", member.guild.name)
                    .replace("{12}", member.guild.memberCount)
                    .replace("{13}", member.guild.emojis.cache.size)
                    .replace("{14}", member.guild.ownerID)
                    .replace("{15}", bot.users.cache.get(member.guild.ownerID).username)
                    .replace("{16}", bot.users.cache.get(member.guild.ownerID).discriminator)
                    
                const AuthorImage = setting.userJoin.SendMessage.EMBED.Author.image
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))
                    
                const AuthorURL = setting.userJoin.SendMessage.EMBED.Author.URL
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))
                    
                const EmbedDescription = setting.userJoin.SendMessage.EMBED.Description
                    .replace("{0}", bot.user.username)
                    .replace("{1}", member.user.id)
                    .replace("{2}", member.user.bot)
                    .replace("{3}", member.user.bot ? lang.Yes : lang.No)
                    .replace("{4}", member.user.username)
                    .replace("{5}", member.user.discriminator)
                    .replace("{6}", member)
                    .replace("{7}", member.guild.members.cache.size)
                    .replace("{8}", member.guild.channels.cache.size)
                    .replace("{9}", member.guild.roles.cache.size)
                    .replace("{10}", member.guild.id)
                    .replace("{11}", member.guild.name)
                    .replace("{12}", member.guild.memberCount)
                    .replace("{13}", member.guild.emojis.cache.size)
                    .replace("{14}", member.guild.ownerID)
                    .replace("{15}", bot.users.cache.get(member.guild.ownerID).username)
                    .replace("{16}", bot.users.cache.get(member.guild.ownerID).discriminator)
                    
                const ImageURLSmall = setting.userJoin.SendMessage.EMBED.ImageURLSmall
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))
                    
                const ImageURLBig = setting.userJoin.SendMessage.EMBED.ImageURLBig
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))
                    
                const FooterName = setting.userJoin.SendMessage.EMBED.Footer.name
                    .replace("{0}", bot.user.username)
                    .replace("{1}", member.user.id)
                    .replace("{2}", member.user.bot)
                    .replace("{3}", member.user.bot ? lang.Yes : lang.No)
                    .replace("{4}", member.user.username)
                    .replace("{5}", member.user.discriminator)
                    .replace("{6}", member)
                    .replace("{7}", member.guild.members.cache.size)
                    .replace("{8}", member.guild.channels.cache.size)
                    .replace("{9}", member.guild.roles.cache.size)
                    .replace("{10}", member.guild.id)
                    .replace("{11}", member.guild.name)
                    .replace("{12}", member.guild.memberCount)
                    .replace("{13}", member.guild.emojis.cache.size)
                    .replace("{14}", member.guild.ownerID)
                    .replace("{15}", bot.users.cache.get(member.guild.ownerID).username)
                    .replace("{16}", bot.users.cache.get(member.guild.ownerID).discriminator)
                    
                const FooterImageURL = setting.userJoin.SendMessage.EMBED.Footer.ImageURL
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))

                if(setting.userJoin.SendMessage.deleteMessage){
                    if(!setting.userJoin.SendMessage.timeDelete) return console.error(lang.NoTimeDelete);

                    const embedWelcome = new MessageEmbed()
                        .setColor(setting.userJoin.SendMessage.EMBED.Color)
                        .setTitle(EmbedTitle)
                        .setURL(EmbedURL)
                        .setAuthor(AuthorName, AuthorImage, AuthorURL)
                        .setDescription(EmbedDescription)
                        .setThumbnail(ImageURLSmall)
                        .addFields(setting.userJoin.SendMessage.EMBED.Fields)
                        .setImage(ImageURLBig)
                        .setTimestamp()
                        .setFooter(FooterName, FooterImageURL);

                    member.send(embedWelcome).then(msg => msg.delete({timeout: parseInt(setting.userJoin.SendMessage.timeDelete)}));
                }else{
                    const embedWelcome = new MessageEmbed()
                        .setColor(setting.userJoin.SendMessage.EMBED.Color)
                        .setTitle(EmbedTitle)
                        .setURL(EmbedURL)
                        .setAuthor(AuthorName, AuthorImage, AuthorURL)
                        .setDescription(EmbedDescription)
                        .setThumbnail(ImageURLSmall)
                        .addFields(setting.userJoin.SendMessage.EMBED.Fields)
                        .setImage(ImageURLBig)
                        .setTimestamp()
                        .setFooter(FooterName, FooterImageURL);

                    member.send(embedWelcome);
                }
            }else{
                console.error(lang.UnknownType);
            }
        }

        if(setting.userJoin.ServerMessage.enable){
            if(!setting.userJoin.ServerMessage.channelID) return console.error(lang.NoChannelID);

            if(setting.userJoin.ServerMessage.type.toUpperCase() === "MESSAGE"){
                if(!setting.userJoin.ServerMessage.message) return console.error(lang.NoUserMessage);

                const UserWelcomeMessage = setting.userJoin.ServerMessage.message
                    .replace("{0}", bot.user.username)
                    .replace("{1}", member.user.id)
                    .replace("{2}", member.user.bot)
                    .replace("{3}", member.user.bot ? lang.Yes : lang.No)
                    .replace("{4}", member.user.username)
                    .replace("{5}", member.user.discriminator)
                    .replace("{6}", member)
                    .replace("{7}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{8}", member.guild.members.cache.size)
                    .replace("{9}", member.guild.channels.cache.size)
                    .replace("{10}", member.guild.roles.cache.size)
                    .replace("{11}", member.guild.id)
                    .replace("{12}", member.guild.name)
                    .replace("{13}", member.guild.memberCount)
                    .replace("{14}", member.guild.emojis.cache.size)
                    .replace("{15}", member.guild.ownerID)
                    .replace("{16}", bot.users.cache.get(member.guild.ownerID).username)
                    .replace("{17}", bot.users.cache.get(member.guild.ownerID).discriminator)
                    .replace("{18}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{19}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{20}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))

                if(setting.userJoin.ServerMessage.deleteMessage){
                    if(!setting.userJoin.ServerMessage.timeDelete) return console.error(lang.NoTimeDelete);

                    bot.channels.cache.get(setting.userJoin.ServerMessage.channelID).send(UserWelcomeMessage).then(msg => msg.delete({timeout: parseInt(setting.userJoin.ServerMessage.timeDelete)}));
                }else{
                    bot.channels.cache.get(setting.userJoin.ServerMessage.channelID).send(UserWelcomeMessage);
                }
            }else if(setting.userJoin.ServerMessage.type.toUpperCase() === "EMBED"){
                if(!setting.userJoin.ServerMessage.EMBED.Color) return console.error(lang.NoEmbedColor); 
                if(!setting.userJoin.ServerMessage.EMBED.Title) return console.error(lang.NoEmbedTitle); 
                if(!setting.userJoin.ServerMessage.EMBED.URL) return console.error(lang.NoEmbedURL); 
                if(!setting.userJoin.ServerMessage.EMBED.Author.name) return console.error(lang.NoEmbedAuthorName); 
                if(!setting.userJoin.ServerMessage.EMBED.Author.image) return console.error(lang.NoEmbedAuthorImage); 
                if(!setting.userJoin.ServerMessage.EMBED.Author.URL) return console.error(lang.NoEmbedAuthorURL); 
                if(!setting.userJoin.ServerMessage.EMBED.Description) return console.error(lang.NoEmbedDescription); 
                if(!setting.userJoin.ServerMessage.EMBED.ImageURLSmall) return console.error(lang.NoEmbedImageURLSmall); 
                if(!setting.userJoin.ServerMessage.EMBED.Fields) return console.error(lang.NoEmbedFields); 
                if(!setting.userJoin.ServerMessage.EMBED.ImageURLBig) return console.error(lang.NoEmbedImageURLBig); 
                if(!setting.userJoin.ServerMessage.EMBED.Footer.name) return console.error(lang.NoEmbedFooterName); 
                if(!setting.userJoin.ServerMessage.EMBED.Footer.ImageURL) return console.error(lang.NoEmbedFooterImageURL); 

                const EmbedTitle = setting.userJoin.ServerMessage.EMBED.Title
                    .replace("{0}", bot.user.username)
                    .replace("{1}", member.user.id)
                    .replace("{2}", member.user.bot)
                    .replace("{3}", member.user.bot ? lang.Yes : lang.No)
                    .replace("{4}", member.user.username)
                    .replace("{5}", member.user.discriminator)
                    .replace("{6}", member)
                    .replace("{7}", member.guild.members.cache.size)
                    .replace("{8}", member.guild.channels.cache.size)
                    .replace("{9}", member.guild.roles.cache.size)
                    .replace("{10}", member.guild.id)
                    .replace("{11}", member.guild.name)
                    .replace("{12}", member.guild.memberCount)
                    .replace("{13}", member.guild.emojis.cache.size)
                    .replace("{14}", member.guild.ownerID)
                    .replace("{15}", bot.users.cache.get(member.guild.ownerID).username)
                    .replace("{16}", bot.users.cache.get(member.guild.ownerID).discriminator)
                    
                const EmbedURL = setting.userJoin.ServerMessage.EMBED.URL
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))
                    
                const AuthorName = setting.userJoin.ServerMessage.EMBED.Author.name
                    .replace("{0}", bot.user.username)
                    .replace("{1}", member.user.id)
                    .replace("{2}", member.user.bot)
                    .replace("{3}", member.user.bot ? lang.Yes : lang.No)
                    .replace("{4}", member.user.username)
                    .replace("{5}", member.user.discriminator)
                    .replace("{6}", member)
                    .replace("{7}", member.guild.members.cache.size)
                    .replace("{8}", member.guild.channels.cache.size)
                    .replace("{9}", member.guild.roles.cache.size)
                    .replace("{10}", member.guild.id)
                    .replace("{11}", member.guild.name)
                    .replace("{12}", member.guild.memberCount)
                    .replace("{13}", member.guild.emojis.cache.size)
                    .replace("{14}", member.guild.ownerID)
                    .replace("{15}", bot.users.cache.get(member.guild.ownerID).username)
                    .replace("{16}", bot.users.cache.get(member.guild.ownerID).discriminator)
                    
                const AuthorImage = setting.userJoin.ServerMessage.EMBED.Author.image
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))
                    
                const AuthorURL = setting.userJoin.ServerMessage.EMBED.Author.URL
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))
                    
                const EmbedDescription = setting.userJoin.ServerMessage.EMBED.Description
                    .replace("{0}", bot.user.username)
                    .replace("{1}", member.user.id)
                    .replace("{2}", member.user.bot)
                    .replace("{3}", member.user.bot ? lang.Yes : lang.No)
                    .replace("{4}", member.user.username)
                    .replace("{5}", member.user.discriminator)
                    .replace("{6}", member)
                    .replace("{7}", member.guild.members.cache.size)
                    .replace("{8}", member.guild.channels.cache.size)
                    .replace("{9}", member.guild.roles.cache.size)
                    .replace("{10}", member.guild.id)
                    .replace("{11}", member.guild.name)
                    .replace("{12}", member.guild.memberCount)
                    .replace("{13}", member.guild.emojis.cache.size)
                    .replace("{14}", member.guild.ownerID)
                    .replace("{15}", bot.users.cache.get(member.guild.ownerID).username)
                    .replace("{16}", bot.users.cache.get(member.guild.ownerID).discriminator)
                    
                const ImageURLSmall = setting.userJoin.ServerMessage.EMBED.ImageURLSmall
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))
                    
                const ImageURLBig = setting.userJoin.ServerMessage.EMBED.ImageURLBig
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))
                    
                const FooterName = setting.userJoin.ServerMessage.EMBED.Footer.name
                    .replace("{0}", bot.user.username)
                    .replace("{1}", member.user.id)
                    .replace("{2}", member.user.bot)
                    .replace("{3}", member.user.bot ? lang.Yes : lang.No)
                    .replace("{4}", member.user.username)
                    .replace("{5}", member.user.discriminator)
                    .replace("{6}", member)
                    .replace("{7}", member.guild.members.cache.size)
                    .replace("{8}", member.guild.channels.cache.size)
                    .replace("{9}", member.guild.roles.cache.size)
                    .replace("{10}", member.guild.id)
                    .replace("{11}", member.guild.name)
                    .replace("{12}", member.guild.memberCount)
                    .replace("{13}", member.guild.emojis.cache.size)
                    .replace("{14}", member.guild.ownerID)
                    .replace("{15}", bot.users.cache.get(member.guild.ownerID).username)
                    .replace("{16}", bot.users.cache.get(member.guild.ownerID).discriminator)
                    
                const FooterImageURL = setting.userJoin.ServerMessage.EMBED.Footer.ImageURL
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))

                if(setting.userJoin.ServerMessage.deleteMessage){
                    if(!setting.userJoin.ServerMessage.timeDelete) return console.error(lang.NoTimeDelete);

                    const embedWelcome = new MessageEmbed()
                        .setColor(setting.userJoin.ServerMessage.EMBED.Color)
                        .setTitle(EmbedTitle)
                        .setURL(EmbedURL)
                        .setAuthor(AuthorName, AuthorImage, AuthorURL)
                        .setDescription(EmbedDescription)
                        .setThumbnail(ImageURLSmall)
                        .addFields(setting.userJoin.ServerMessage.EMBED.Fields)
                        .setImage(ImageURLBig)
                        .setTimestamp()
                        .setFooter(FooterName, FooterImageURL);

                    bot.channels.cache.get(setting.userJoin.ServerMessage.channelID).send(embedWelcome).then(msg => msg.delete({timeout: parseInt(setting.userJoin.ServerMessage.timeDelete)}));
                }else{
                    const embedWelcome = new MessageEmbed()
                        .setColor(setting.userJoin.ServerMessage.EMBED.Color)
                        .setTitle(EmbedTitle)
                        .setURL(EmbedURL)
                        .setAuthor(AuthorName, AuthorImage, AuthorURL)
                        .setDescription(EmbedDescription)
                        .setThumbnail(ImageURLSmall)
                        .addFields(setting.userJoin.ServerMessage.EMBED.Fields)
                        .setImage(ImageURLBig)
                        .setTimestamp()
                        .setFooter(FooterName, FooterImageURL);

                    bot.channels.cache.get(setting.userJoin.ServerMessage.channelID).send(embedWelcome);
                }
            }else{
                console.error(lang.UnknownType);
            }
        }
    }
});

bot.on("guildMemberRemove", member => {
    if(setting.userLeave.enable){
        if(setting.userLeave.ServerMessage.enable){
            if(!setting.userLeave.ServerMessage.channelID) return console.error(lang.NoChannelID);

            if(setting.userLeave.ServerMessage.type.toUpperCase() === "MESSAGE"){
                if(!setting.userLeave.ServerMessage.message) return console.error(lang.NoUserMessage);

                const UserWelcomeMessage = setting.userLeave.ServerMessage.message
                    .replace("{0}", bot.user.username)
                    .replace("{1}", member.user.id)
                    .replace("{2}", member.user.bot)
                    .replace("{3}", member.user.bot ? lang.Yes : lang.No)
                    .replace("{4}", member.user.username)
                    .replace("{5}", member.user.discriminator)
                    .replace("{6}", member)
                    .replace("{7}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{8}", member.guild.members.cache.size)
                    .replace("{9}", member.guild.channels.cache.size)
                    .replace("{10}", member.guild.roles.cache.size)
                    .replace("{11}", member.guild.id)
                    .replace("{12}", member.guild.name)
                    .replace("{13}", member.guild.memberCount)
                    .replace("{14}", member.guild.emojis.cache.size)
                    .replace("{15}", member.guild.ownerID)
                    .replace("{16}", bot.users.cache.get(member.guild.ownerID).username)
                    .replace("{17}", bot.users.cache.get(member.guild.ownerID).discriminator)
                    .replace("{18}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{19}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{20}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))

                if(setting.userLeave.ServerMessage.deleteMessage){
                    if(!setting.userLeave.ServerMessage.timeDelete) return console.error(lang.NoTimeDelete);

                    bot.channels.cache.get(setting.userLeave.ServerMessage.channelID).send(UserWelcomeMessage).then(msg => msg.delete({timeout: parseInt(setting.userLeave.ServerMessage.timeDelete)}));
                }else{
                    bot.channels.cache.get(setting.userLeave.ServerMessage.channelID).send(UserWelcomeMessage);
                }
            }else if(setting.userLeave.ServerMessage.type.toUpperCase() === "EMBED"){
                if(!setting.userLeave.ServerMessage.EMBED.Color) return console.error(lang.NoEmbedColor); 
                if(!setting.userLeave.ServerMessage.EMBED.Title) return console.error(lang.NoEmbedTitle); 
                if(!setting.userLeave.ServerMessage.EMBED.URL) return console.error(lang.NoEmbedURL); 
                if(!setting.userLeave.ServerMessage.EMBED.Author.name) return console.error(lang.NoEmbedAuthorName); 
                if(!setting.userLeave.ServerMessage.EMBED.Author.image) return console.error(lang.NoEmbedAuthorImage); 
                if(!setting.userLeave.ServerMessage.EMBED.Author.URL) return console.error(lang.NoEmbedAuthorURL); 
                if(!setting.userLeave.ServerMessage.EMBED.Description) return console.error(lang.NoEmbedDescription); 
                if(!setting.userLeave.ServerMessage.EMBED.ImageURLSmall) return console.error(lang.NoEmbedImageURLSmall); 
                if(!setting.userLeave.ServerMessage.EMBED.Fields) return console.error(lang.NoEmbedFields); 
                if(!setting.userLeave.ServerMessage.EMBED.ImageURLBig) return console.error(lang.NoEmbedImageURLBig); 
                if(!setting.userLeave.ServerMessage.EMBED.Footer.name) return console.error(lang.NoEmbedFooterName); 
                if(!setting.userLeave.ServerMessage.EMBED.Footer.ImageURL) return console.error(lang.NoEmbedFooterImageURL); 

                const EmbedTitle = setting.userLeave.ServerMessage.EMBED.Title
                    .replace("{0}", bot.user.username)
                    .replace("{1}", member.user.id)
                    .replace("{2}", member.user.bot)
                    .replace("{3}", member.user.bot ? lang.Yes : lang.No)
                    .replace("{4}", member.user.username)
                    .replace("{5}", member.user.discriminator)
                    .replace("{6}", member)
                    .replace("{7}", member.guild.members.cache.size)
                    .replace("{8}", member.guild.channels.cache.size)
                    .replace("{9}", member.guild.roles.cache.size)
                    .replace("{10}", member.guild.id)
                    .replace("{11}", member.guild.name)
                    .replace("{12}", member.guild.memberCount)
                    .replace("{13}", member.guild.emojis.cache.size)
                    .replace("{14}", member.guild.ownerID)
                    .replace("{15}", bot.users.cache.get(member.guild.ownerID).username)
                    .replace("{16}", bot.users.cache.get(member.guild.ownerID).discriminator)
                    
                const EmbedURL = setting.userLeave.ServerMessage.EMBED.URL
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))
                    
                const AuthorName = setting.userLeave.ServerMessage.EMBED.Author.name
                    .replace("{0}", bot.user.username)
                    .replace("{1}", member.user.id)
                    .replace("{2}", member.user.bot)
                    .replace("{3}", member.user.bot ? lang.Yes : lang.No)
                    .replace("{4}", member.user.username)
                    .replace("{5}", member.user.discriminator)
                    .replace("{6}", member)
                    .replace("{7}", member.guild.members.cache.size)
                    .replace("{8}", member.guild.channels.cache.size)
                    .replace("{9}", member.guild.roles.cache.size)
                    .replace("{10}", member.guild.id)
                    .replace("{11}", member.guild.name)
                    .replace("{12}", member.guild.memberCount)
                    .replace("{13}", member.guild.emojis.cache.size)
                    .replace("{14}", member.guild.ownerID)
                    .replace("{15}", bot.users.cache.get(member.guild.ownerID).username)
                    .replace("{16}", bot.users.cache.get(member.guild.ownerID).discriminator)
                    
                const AuthorImage = setting.userLeave.ServerMessage.EMBED.Author.image
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))
                    
                const AuthorURL = setting.userLeave.ServerMessage.EMBED.Author.URL
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))
                    
                const EmbedDescription = setting.userLeave.ServerMessage.EMBED.Description
                    .replace("{0}", bot.user.username)
                    .replace("{1}", member.user.id)
                    .replace("{2}", member.user.bot)
                    .replace("{3}", member.user.bot ? lang.Yes : lang.No)
                    .replace("{4}", member.user.username)
                    .replace("{5}", member.user.discriminator)
                    .replace("{6}", member)
                    .replace("{7}", member.guild.members.cache.size)
                    .replace("{8}", member.guild.channels.cache.size)
                    .replace("{9}", member.guild.roles.cache.size)
                    .replace("{10}", member.guild.id)
                    .replace("{11}", member.guild.name)
                    .replace("{12}", member.guild.memberCount)
                    .replace("{13}", member.guild.emojis.cache.size)
                    .replace("{14}", member.guild.ownerID)
                    .replace("{15}", bot.users.cache.get(member.guild.ownerID).username)
                    .replace("{16}", bot.users.cache.get(member.guild.ownerID).discriminator)
                    
                const ImageURLSmall = setting.userLeave.ServerMessage.EMBED.ImageURLSmall
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))
                    
                const ImageURLBig = setting.userLeave.ServerMessage.EMBED.ImageURLBig
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))
                    
                const FooterName = setting.userLeave.ServerMessage.EMBED.Footer.name
                    .replace("{0}", bot.user.username)
                    .replace("{1}", member.user.id)
                    .replace("{2}", member.user.bot)
                    .replace("{3}", member.user.bot ? lang.Yes : lang.No)
                    .replace("{4}", member.user.username)
                    .replace("{5}", member.user.discriminator)
                    .replace("{6}", member)
                    .replace("{7}", member.guild.members.cache.size)
                    .replace("{8}", member.guild.channels.cache.size)
                    .replace("{9}", member.guild.roles.cache.size)
                    .replace("{10}", member.guild.id)
                    .replace("{11}", member.guild.name)
                    .replace("{12}", member.guild.memberCount)
                    .replace("{13}", member.guild.emojis.cache.size)
                    .replace("{14}", member.guild.ownerID)
                    .replace("{15}", bot.users.cache.get(member.guild.ownerID).username)
                    .replace("{16}", bot.users.cache.get(member.guild.ownerID).discriminator)
                    
                const FooterImageURL = setting.userLeave.ServerMessage.EMBED.Footer.ImageURL
                    .replace("{0}", member.user.displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{1}", bot.users.cache.get(member.guild.ownerID).displayAvatarURL({size: 4096, dynamic: true}))
                    .replace("{2}", member.guild.iconURL({size: 4096, dynamic: true}))
                    .replace("{3}", bot.user.displayAvatarURL({size: 4096, dynamic: true}))

                if(setting.userLeave.ServerMessage.deleteMessage){
                    if(!setting.userLeave.ServerMessage.timeDelete) return console.error(lang.NoTimeDelete);

                    const embedWelcome = new MessageEmbed()
                        .setColor(setting.userLeave.ServerMessage.EMBED.Color)
                        .setTitle(EmbedTitle)
                        .setURL(EmbedURL)
                        .setAuthor(AuthorName, AuthorImage, AuthorURL)
                        .setDescription(EmbedDescription)
                        .setThumbnail(ImageURLSmall)
                        .addFields(setting.userLeave.ServerMessage.EMBED.Fields)
                        .setImage(ImageURLBig)
                        .setTimestamp()
                        .setFooter(FooterName, FooterImageURL);

                    bot.channels.cache.get(setting.userLeave.ServerMessage.channelID).send(embedWelcome).then(msg => msg.delete({timeout: parseInt(setting.userLeave.ServerMessage.timeDelete)}));
                }else{
                    const embedWelcome = new MessageEmbed()
                        .setColor(setting.userLeave.ServerMessage.EMBED.Color)
                        .setTitle(EmbedTitle)
                        .setURL(EmbedURL)
                        .setAuthor(AuthorName, AuthorImage, AuthorURL)
                        .setDescription(EmbedDescription)
                        .setThumbnail(ImageURLSmall)
                        .addFields(setting.userLeave.ServerMessage.EMBED.Fields)
                        .setImage(ImageURLBig)
                        .setTimestamp()
                        .setFooter(FooterName, FooterImageURL);

                    bot.channels.cache.get(setting.userLeave.ServerMessage.channelID).send(embedWelcome);
                }
            }else{
                console.error(lang.UnknownType);
            }
        }
    }
});