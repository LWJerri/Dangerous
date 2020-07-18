<h1>🎥 DANGEROUS BOT</h1>
<p>This bot created for fast configuration and run on Heroku service. Currently bot in stage development!</p>

<h2>📃 Setup:</h2>
<p>
1. Install <a href="">Node.js</a> Current.<br>
2. Open cmd panel.<br>
3. Clone repository - <strong>git clone https://github.com/LWJerri/Dangerous</strong>.<br>
4. Open folder - <strong>cd Dangerous</strong>.<br>
5. Rename <strong>.env.example</strong> to <strong>.env</strong> and configurate file (See down).<br>
6. Run command - <strong>npm i</strong> for install all modules.<br>
7. When all modules install, write - <strong>npm run start</strong>.<br>
</p>

<h2>📖 Configurate .env file:</h2>
<p><b>* - Required to fill out!</b></p>
<pre><code>
*MainGuildID -> Main guild ID.

EXAMPLE: MainGuildID=123456789012345678.
</code></pre>
<pre><code>
StartBotMessage -> Message when bot started. Also you can use special placeholders:
$0: Show bot username.
$1: Show guilds size.
$2: Show users size.
$3: Show channels size.
$4: Show guild name.
$5: Show version bot.
$6: Show bot description.
$7: Show GitHub link.

EXAMPLE: $0 ready! Main guild - $4.
</code></pre>
<pre><code>
BotStatus -> Set bot activity message.

EXAMPLE: BotStatus=Hello, world! 🎨
</code></pre>
<pre><code>
*TypeStatus -> Set bot status. 

Available statuses: PLAYING, STREAMING, LISTENING, WATCHING.

EXAMPLE: TypeStatus=STREAMING.
</code></pre>
<pre><code>
TypeURL -> Twitch URL if TypeStatus set to STREAMING.

EXAMPLE: TypeURL=https://twitch.tv/lwjerri.
</code></pre>
<pre><code>
SetGuild -> Set avatar and nickname with guild.

ONLY true or false!

EXAMPLE: SetGuild=true.
</code></pre>
<pre><code>
MemeChatID -> Channel ID with memes.

EXAMPLE: MemeChatID=123456789012345678.
</code></pre>
<pre><code>
ColorChatID -> Channel ID with random messages. [test]

EXAMPLE: ColorChatID=123456789012345678.
</code></pre>
<pre><code>
ColorRed -> Emoji Red color.

EXAMPLE: ColorRed=🔴.
</code></pre>
<pre><code>
ColorGreen -> Emoji Green color.

EXAMPLE: ColorGreen=🟢.
</code></pre>
<pre><code>
ColorBlue -> Emoji Blue color.

EXAMPLE: ColorBlue=🔵.
</code></pre>
<pre><code>
*MemeReactions -> Enable or disable reaction function?

ONLY true or false!

EXAMPLE: MemeReactions=true.
</code></pre>
<pre><code>
*ColorReactions -> Enable or disable reaction function?

ONLY true or false!

EXAMPLE: ColorReactions=true.
</code></pre>
<pre><code>
*RoleAdds -> Enable or disable give roles when user join.

ONLY true or false!

EXAMPLE: RoleAdds=true.
</code></pre>
<pre><code>
*WelcomeMessage -> Enable send user message to DM or no.

ONLY true on false!

EXAMPLE: WelcomeMessage=true.
</code></pre>
<pre><code>
UserMessage -> Send new member messages to DM. Also you can use special placeholders:
$0: Nickname newbie user.
$1: Newbie ID.
$2: Newbie user avatar.
$3: Guild name.
$4: Guild icon.
$5: Guild users size.
$6: Guild owner nickname.

EXAMPLE: Welcome, $0! Server name - $3, users size: $5.
</code></pre>
<pre><code>
NumberRoles -> Number give roles. Limit 2 role!

EXAMPLE: NumberRoles=2.
</code></pre>
<pre><code>
ReactUP -> Emoji good reaction.

EXAMPLE: ReactUP=👍.
</code></pre>
<pre><code>
ReactDOWN -> Emoji bad reaction.

EXAMPLE: ReactDOWN=👎.
</code></pre>
<pre><code>
RoleAddOne -> ID first role for give user.

EXAMPLE: RoleAddOne=123456789012345678.
</code></pre>
<pre><code>
RoleAddTwo -> ID second role for give user.

EXAMPLE: RoleAddTwo=123456789012345678.
</code></pre>
<pre><code>
BotToken -> Bot token for run and work 😚.

EXAMPLE: BotToken=NzM0MTY0MjUxMDA2MjA2MDIz.XxNtwQ.bgZ5o89fMcpHEAVaOp8skkW_hUY.
</code></pre>

<p><b>ATTENTION:</b> If you have question or idea create ISSUE in this repostory! Have a nice day :3</p>

<h2>Code by <a href="https://github.com/LWJerri">LWJerri</a></h2>