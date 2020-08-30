const setting = require("./settings.json");
const { ShardingManager } = require("discord.js");
const shard = new ShardingManager("./src/app.js", { token: setting.token });
const lang = require(`./lang/${setting.lang}.json`);

if(!setting.shardCreate.shardNumbers) return console.error(lang.NoShardNumber);

shard.on("shardCreate", shard => {
    if(setting.shardCreate.enable){
        if(!setting.shardCreate.ConsoleShard) return console.error(lang.NoShardConsole);

        let ConsoleShard = setting.shardCreate.ConsoleShard
            .replace("{0}", shard.id)
            .replace("{1}", shard.manager.totalShards)

        console.log(ConsoleShard);
    }
});

shard.spawn(parseInt(setting.shardCreate.shardNumbers));