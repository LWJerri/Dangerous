# FreeBot
It's open-source Discord bot for fast configuration and run on Heroku or other hosting by LWJerri.

## Installing
* **IMPORTANT!** YOU MUST HAVE [**NODE.JS**](https://nodejs.org/en/) V12 OR HIGHT.
* **IMPORTANT!** IF YOU NEED HOST **THIS** BOT ON [**HEROKU**](https://www.heroku.com/) WITH GITHUB, SEE THIS VIDEO: https://example.com

1) Download this repository.
2) Open project folder in console.
3) Put `npm i`.
4) Rename `settings.example.json` to `settings.json`.
5) Configurate `settings.json` (*See table*).
6) Run app - `npm run start` or `node ./src/run.js`.
7) **Completed!**

| Setting Name                                      | Parameters                                        | Placeholders  |
| ------------------------------------------------- | ------------------------------------------------- | ------------- |
| **disableMentions**                               | `none`, `all`, `everyone`                         | *Not support* |
| **token**                                         | Token Discord bot                                 | *Not support* |
| **lang**                                          | `ru`                                              | *Not support* |
| **shardCreate.enable**                            | `true`/`false`                                    | *Not support* |
| **shardCreate.ConsoleShard**                      | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#shardCreate.ConsoleShard)  |
| **shardCreate.shardNumbers**                      | Number. Set to `1`                                | *Not support* |
| **botOn.enable**                                  | `true`/`false`                                    | *Not support* |
| **botOn.WelcomeMessage.enable**                   | `true`/`false`                                    | *Not support* |
| **botOn.WelcomeMessage.ConsoleMSG**               | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#botOn.WelcomeMessage.ConsoleMSG)  |
| **botOn.botActivity.enable**                      | `true`/`false`                                    | *Not support* |
| **botOn.botActivity.botMessage**                  | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#botOn.botActivity.botMessage)  |
| **botOn.botActivity.botURL**                      | Only Twitch URL                                   | *Not support* |
| **botOn.botActivity.botType**                     | `PLAYING`, `STREAMING`, `LISTENING`, `WATCHING`   | *Not support* |
| **botOn.botActivity.botStatus**                   | `online`, `idle`, `dnd`, `offline`                | *Not support* |
| **botOn.botStats.enable**                         | `true`/`false`                                    | *Not support* |
| **userJoin.enable**                               | `true`/`false`                                    | *Not support* |
| **userJoin.RoleGive.enable**                      | `true`/`false`                                    | *Not support* |
| **userJoin.RoleGive.roles**                       | `["ROLE_ID_1", etc.]`                             | *Not support* |
| **userJoin.SendMessage.enable**                   | `true`/`false`                                    | *Not support* |
| **userJoin.SendMessage.type**                     | `MESSAGE`/`EMBED`                                 | *Not support* |
| **userJoin.SendMessage.deleteMessage**            | `true`/`false`                                    | *Not support* |
| **userJoin.SendMessage.timeDelete**               | Time in ms                                        | *Not support* |
| **userJoin.SendMessage.message**                  | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.SendMessage.message)  |
| **userJoin.SendMessage.EMBED.Color**              | Embed color in format "`#ffff00`"                 | *Not support* |
| **userJoin.SendMessage.EMBED.Title**              | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.SendMessage.EMBED.Title)  |
| **userJoin.SendMessage.EMBED.URL**                | All urls                                          | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.SendMessage.EMBED.URL)  |
| **userJoin.SendMessage.EMBED.Author.name**        | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.SendMessage.EMBED.Author.name)  |
| **userJoin.SendMessage.EMBED.Author.image**       | Only image URL                                    | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.SendMessage.EMBED.Author.image)  |
| **userJoin.SendMessage.EMBED.Author.URL**         | All urls                                          | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.SendMessage.EMBED.Author.URL)  |
| **userJoin.SendMessage.EMBED.Description**        | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.SendMessage.EMBED.Description)  |
| **userJoin.SendMessage.EMBED.ImageURLSmall**      | Only image URL                                    | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.SendMessage.EMBED.ImageURLSmall)  |
| **userJoin.SendMessage.EMBED.ImageURLBig**        | Only image URL                                    | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.SendMessage.EMBED.ImageURLBig)  |
| **userJoin.SendMessage.EMBED.Fields.name**        | User text                                         | *Not support*  |
| **userJoin.SendMessage.EMBED.Fields.value**       | User text                                         | *Not support*  |
| **userJoin.SendMessage.EMBED.Fields.inline**      | `true`/`false`                                    | *Not support* |
| **userJoin.SendMessage.EMBED.Footer.name**        | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.SendMessage.EMBED.Footer.name)  |
| **userJoin.SendMessage.EMBED.Footer.ImageURL**    | Only image URL                                    | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.SendMessage.EMBED.Footer.ImageURL)  |
| **userJoin.ServerMessage.enable**                 | `true`/`false`                                    | *Not support* |
| **userJoin.ServerMessage.channelID**              | Number channel ID                                 | *Not support* |
| **userJoin.ServerMessage.type**                   | `MESSAGE`/`EMBED`                                 | *Not support* |
| **userJoin.ServerMessage.deleteMessage**          | `true`/`false`                                    | *Not support* |
| **userJoin.ServerMessage.timeDelete**             | Time in ms                                        | *Not support* |
| **userJoin.ServerMessage.message**                | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.ServerMessage.message)  |
| **userJoin.ServerMessage.EMBED.Color**            | Embed color in format "`#ffff00`"                 | *Not support* |
| **userJoin.ServerMessage.EMBED.Title**            | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.ServerMessage.EMBED.Title)  |
| **userJoin.ServerMessage.EMBED.URL**              | All urls                                          | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.ServerMessage.EMBED.URL)  |
| **userJoin.ServerMessage.EMBED.Author.name**      | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.ServerMessage.EMBED.Author.name)  |
| **userJoin.ServerMessage.EMBED.Author.image**     | Only image URL                                    | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.ServerMessage.EMBED.Author.image)  |
| **userJoin.ServerMessage.EMBED.Author.URL**       | All urls                                          | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.ServerMessage.EMBED.Author.URL)  |
| **userJoin.ServerMessage.EMBED.Description**      | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.ServerMessage.EMBED.Description)  |
| **userJoin.ServerMessage.EMBED.ImageURLSmall**    | Only image URL                                    | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.ServerMessage.EMBED.ImageURLSmall)  |
| **userJoin.ServerMessage.EMBED.ImageURLBig**      | Only image URL                                    | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.ServerMessage.EMBED.ImageURLBig)  |
| **userJoin.ServerMessage.EMBED.Fields.name**      | User text                                         | *Not support* |
| **userJoin.ServerMessage.EMBED.Fields.value**     | User text                                         | *Not support* |
| **userJoin.ServerMessage.EMBED.Fields.inline**    | `true`/`false`                                    | *Not support* |
| **userJoin.ServerMessage.EMBED.Footer.name**      | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.ServerMessage.EMBED.Footer.name)  |
| **userJoin.ServerMessage.EMBED.Footer.ImageURL**  | Only image URL                                    | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userJoin.ServerMessage.EMBED.Footer.ImageURL)  |
| **userLeave.enable**                              | `true`/`false`                                    | *Not support* |
| **userLeave.ServerMessage.enable**                | `true`/`false`                                    | *Not support* |
| **userLeave.ServerMessage.channelID**             | Number channel ID                                 | *Not support* |
| **userLeave.ServerMessage.type**                  | `MESSAGE`/`EMBED`                                 | *Not support* |
| **userLeave.ServerMessage.deleteMessage**         | `true`/`false`                                    | *Not support* |
| **userLeave.ServerMessage.timeDelete**            | Time in ms                                        | *Not support* |
| **userLeave.ServerMessage.message**               | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userLeave.ServerMessage.message)  |
| **userLeave.ServerMessage.EMBED.Color**           | Embed color in format "`#ffff00`"                 | *Not support* |
| **userLeave.ServerMessage.EMBED.Title**           | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userLeave.ServerMessage.EMBED.Title)  |
| **userLeave.ServerMessage.EMBED.URL**             | All urls                                          | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userLeave.ServerMessage.EMBED.URL)  |
| **userLeave.ServerMessage.EMBED.Author.name**     | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userLeave.ServerMessage.EMBED.Author.name)  |
| **userLeave.ServerMessage.EMBED.Author.image**    | Only image URL                                    | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userLeave.ServerMessage.EMBED.Author.image)  |
| **userLeave.ServerMessage.EMBED.Author.URL**      | All urls                                          | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userLeave.ServerMessage.EMBED.Author.URL)  |
| **userLeave.ServerMessage.EMBED.Description**     | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userLeave.ServerMessage.EMBED.Description)  |
| **userLeave.ServerMessage.EMBED.ImageURLSmall**   | Only image URL                                    | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userLeave.ServerMessage.EMBED.ImageURLSmall)  |
| **userLeave.ServerMessage.EMBED.ImageURLBig**     | Only image URL                                    | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userLeave.ServerMessage.EMBED.ImageURLBig)  |
| **userLeave.ServerMessage.EMBED.Fields.name**     | User text                                         | *Not support* |
| **userLeave.ServerMessage.EMBED.Fields.value**    | User text                                         | *Not support* |
| **userLeave.ServerMessage.EMBED.Fields.inline**   | `true`/`false`                                    | *Not support* |
| **userLeave.ServerMessage.EMBED.Footer.name**     | User text                                         | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userLeave.ServerMessage.EMBED.Footer.name)  |
| **userLeave.ServerMessage.EMBED.Footer.ImageURL** | Only image URL                                    | [**SHOW**](https://github.com/LWJerri/FreeBot/blob/master/PLACEHOLDERS.md#userLeave.ServerMessage.EMBED.Footer.ImageURL)  |

## 

## Found bug or need help?
If you found a bug or you need help, create an issue, and waiting a reply from the owner.

## LICENSE
[**OPEN LICENSE FILE**](https://github.com/LWJerri/FreeBot/blob/master/LICENSE)