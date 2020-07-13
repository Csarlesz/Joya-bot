const botconfig = require("./botconfig.json");
const tokenfile = require("./tokenfile.json");
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const superagent = require("superagent");
const bot = new Discord.Client({disableEveryone: true});
let prefix = botconfig.prefix;

bot.on("ready", async () => {
    console.log(`${bot.user.username} online lett ${bot.guilds.size} szerveren!`);
    let activities = [ `${bot.guilds.size} szerveren`, `${prefix}help`, `${bot.users.size} felhasználó`, `with your mom... :DD`, `Szerver IP: demon.sunwell.hu:7837`, `Fórum: www.diamondrp.hu` ], i = 0;
    setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, { type: "PLAYING" }), 10000)
});    

//bot.on("guildMemberAdd", function(member) {
    //let ch = member.guild.channels.find(`name`, `👉új-tagok`);
    //let r = member.roles.find(`name`, `Civil`);
    
    //ch.send(`Üdvözlünk a szerveren **${member}>**`)
    //member.addRole(r,id);
//});

//------------------------ M Á S  F A J T A  P A R A N C S O K ---------------------
bot.on("message", async message => {
    //első parancs
        
    //második parancs
});
// MEGINT MÁS FAJTA -----------------------------------------------------
bot.on("message", message => {
    if(message.author.bot) return;
//első parancs
    if(message.content.startsWith(`${prefix}online`)){
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        message.channel.send(`A bot ennyi ideje online: ${days}nap ${hours}óra ${minutes}perc ${seconds}másodperc `);
        console.log(`${message.author.username} használta a(z) ${prefix}online parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
     }  
    //-------------------------------------------------------------------------
    if(message.content.startsWith(`${prefix}szerverinfo`)){
        let embed = new Discord.RichEmbed()
        .setAuthor("")
        .setColor('RANDOM')
        .setTitle("Szerver információk")
        .addField("A discord szerver neve:", `${message.guild.name}`)
        .addField("A discord szerver tulajdonosa:", `${message.guild.owner}`)
        .addField("Felhasználók száma:", `${message.guild.memberCount}`)
        .addField("Rangok:", `${message.guild.roles.size}`)
        .setFooter(`${bot.user.username}`, bot.user.avatarURL)
        .setTimestamp()
        message.channel.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}szerverinfo parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
      }
      //---------------------------------------------------------------------------------------
      
    //-----------------------------------------------------------------------------------------------------
    
   //-------------------------------------------------------------------------------------------------------------   
});

bot.on("message", async message => {
    if(message.author.bot) return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let mention = message.mentions.users.first();
    let mentionMessage = message.content.slice(30);
    let ch = message.guild.channels.find(n => n.name == "reportok");
    let ch1 = message.guild.channels.find(n => n.name == "ötletek");
    let ch2 = message.guild.channels.find(n => n.name == "hibák");
    let bototletcsatorna = message.guild.channels.get("731921434418610277");
    let bothibacsatorna = message.guild.channels.get("731921403976351808");
    let args = messageArray.slice(1);
    let blacklist = ["kurva", "anyad", "anyád", "bazdmeg", "bazzeg", "geci", "gec", "ge*i"];
    for(let i = 0; i < blacklist.length; i++) {
        if(messageArray.includes(blacklist[i], 0)) {
            message.delete();
            message.reply("ez a szó tiltott!");
        }
    }
    let blacklist1 = ["mizu", "mizu?", "mizi"];
    for(let i = 0; i < blacklist1.length; i++) {
        if(messageArray.includes(blacklist1[i], 0)) {
            message.reply("velem semmi, éppen elvagyok veletek. Veled? Illetve várjuk a többiek válaszát!");
        }
    }
    let blacklist2 = ["ip", "info", "web", "forum", "fórum", "weboldal", "facebook", "szerver", "server"];
    for(let i = 0; i < blacklist2.length; i++) {
        if(messageArray.includes(blacklist2[i], 0)) {
            message.reply("itt vannak az információk - **IP: demon.sunwell.hu:7837, fórum: wwww.diamondrp.hu**, SA:MP szerver");
        }
    }
    let blacklist3 = ["xd", "Xd", "xD", "XD"];
    for(let i = 0; i < blacklist3.length; i++) {
        if(messageArray.includes(blacklist3[i], 0)) {
            message.channel.send(`**${message.author.username} szakad a nevetéstől.**`);
        }
    }
    let blacklist4 = ["kiraj", "kiraj", "felipe", "csárli", "csarli", "csarlie", "zed", "charlie", "flilipsz"];
    for(let i = 0; i < blacklist4.length; i++) {
        if(messageArray.includes(blacklist4[i], 0)) {
            message.channel.send(`ki a kiraj? csárli a kiráj, zed meg filipsz a szolgám :white_check_mark:`);
        }
    }
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setFooter(`${bot.user.username}`, bot.user.avatarURL)
    .setTimestamp()

     //--------------------------- P A R A N C S O K ----------------------



     if (cmd == `${prefix}help`) {
        let embed = new Discord.RichEmbed()
        .setTitle("Bot parancsok", "www.diamondrp.hu")
        .setColor("RANDOM")
        .addField(`A bot prefixe:`, `----- ${prefix} -----`)
        .addField(`A bot parancsai:`, `${prefix}embed, ${prefix}ping, ${prefix}online, ${prefix}report, ${prefix}szerverinfo, ${prefix}botinfo, ${prefix}avatar, ${prefix}szerverötlet, ${prefix}szerverhiba, ${prefix}botötlet, ${prefix}bothiba, ${prefix}userinfo, ${prefix}template`)
        .addField(`A bot fun parancsai:`, `${prefix}daily, ${prefix}hourly, ${prefix}work, ${prefix}slut, ${prefix}rob, ${prefix}egyenleg, ${prefix}halászás, ${prefix}szerencsejatek, ${prefix}say`)
        .addField(`Moderátori parancsok:`, `${prefix}ahelp`)
        .addBlankField()
        .setFooter(`${bot.user.username}`, bot.user.avatarURL)
        .setTimestamp()

        message.channel.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}help parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if (cmd == `${prefix}ahelp`) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához! (Szükséges jog: \`Üzenetkezelés\`)");
        let embed = new Discord.RichEmbed()
        .setTitle("Moderátori parancsok", "www.diamondrp.hu")
        .setColor("RANDOM")
        .addField(`A bot prefixe:`, `----- ${prefix} -----`)
        .addField(`Moderátori parancsok:`, `${prefix}kick, ${prefix}ban, ${prefix}cc, ${prefix}mute, ${prefix}unmute, ${prefix}template, ${prefix}addrole, ${prefix}takerole`)
        .addBlankField()
        .setFooter(`${bot.user.username}`, bot.user.avatarURL)
        .setTimestamp()

        message.channel.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}ahelp parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);        
    }
        if (cmd == `${prefix}embed`) {
        let embed = new Discord.RichEmbed()
        .setTitle("Ezt nevezik embednek", "www.diamondrp.hu")
        .setColor("RANDOM")
        .setDescription("Ez az Embed leírása")
        .addField("Ez az Embed mezőjének a címe", "Ez a mező értéke-lehet többet rakni")
        .addBlankField()
        .setFooter(`${bot.user.username} bot - Ez a footer`, bot.user.avatarURL)
        .setTimestamp()
        
        message.channel.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}embed parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}say`) {
      if(message.author.kliens) return message.reply(':x: Ne buggoltasd a botot!')
      var mMsg = message.content.split(' ').slice(1).join(' ')
      if(!mMsg) return message.channel.send(`Kérlek adj megy egy szöveget! (**${prefix}say [szöveg]**)`);
      message.delete()
      message.channel.send(mMsg)
    }
    if(cmd == `${prefix}avatar`) {
        if(!args[0]) {
            message.channel.send(`:x: Kérlek jelöld meg azt a felhasználót, akinek az avatarját szeretnéd látni! **(!avatar [@név])**`);
        }
        if (!mention) return;
        let mentionedUser = message.mentions.users.first() || message.author
        let aEmbed = new Discord.RichEmbed()


        .setImage(mentionedUser.displayAvatarURL)
        .setColor("00ff00")
        .setTitle(`${mentionedUser.username} avatárja`)
        .setFooter(`${bot.user.username} bot`, bot.user.displayAvatarURL)
        .setTimestamp()

        message.channel.send(aEmbed);

        console.log(`${message.author.username} használta a(z) ${prefix}avatar parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);

    }
    if(cmd == `${prefix}szerencsejatek` || cmd == `${prefix}szerencsejaték` || cmd == `${prefix}szerencsejátek` || cmd == `${prefix}szerencsejáték`) {
        let embed = new Discord.RichEmbed()
        let sum = Math.floor(Math.random() * 6) +1;

        embed.setColor("PURPLE");
        embed.addField("Szerencsejáték", `A mostani kidobott számod: **${sum}**`);
        embed.setFooter(`${bot.user.username}`, bot.user.avatarURL)
        embed.addBlankField();
        embed.setTimestamp()

        if(sum == 1) embed.addField("Mostani szerencse:", "Nagyon balszerencsés voltál. :(");
        else if(sum < 3) embed.addField("Mostani szerencse:", "Balszerencsés voltál. :/");
        else if(sum < 5) embed.addField("Mostani szerencse:", "Átlagos. :/");
        else if(sum == 5) embed.addField("Mostani szerencse:", "Szerencsés voltál. :)");
        else embed.addField("Mostani szerencséd:", "Nagyon szerencsés voltál. :DDDDDDDDDD");
        
        message.channel.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}gamble parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}ping`){

        let pembed = new Discord.RichEmbed()
        .setColor("#f6ff00")
        .setTitle("A bot pingje")
        .addField("Ping:", `**${bot.ping}ms**`)
        .setThumbnail(message.guild.iconURL)
        .setFooter(`${bot.user.username}`, bot.user.avatarURL)
        .setTimestamp()
        
        message.channel.send(pembed);
        console.log(`${message.author.username} használta a(z) ${prefix}ping parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
     }
     if(cmd == `${prefix}botinfo`) {
         let embed = new Discord.RichEmbed()
         .setColor("GREEN")
         .setTitle("A bot információi")
         .setDescription("A bot **JavaScript-ben** készült!")
         .addField("A bot neve: ", `${bot.user.username}#0528`)
         .addField("A bot fejlesztője:", `Troll+#5256`)
         .addField("A bot jelenleg ennyi szerveren van:", bot.guilds.size)
         .addField("A bot prefixe:", `----- ${prefix} -----`)
         .setFooter(`${bot.user.username}`, bot.user.avatarURL)
         .setTimestamp()

         message.channel.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}botinfo parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
     }
     if(cmd == `${prefix}report`) {
        const suggestchannel = message.guild.channels.find(x => x.name === "reportok");
        if (!suggestchannel) return message.channel.send(":x: Nem találom a **reportok** csatornát! Kérlek rakd feljebb a rangom, vagy készíts egyet!");
        let toReport = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!args[0]) return message.channel.send(`:x: Jelöld meg azt a felhasználót, akit reportolni szeretnél! (**${prefix}report [@név] [indok]**)`);
        if(!toReport) return message.channel.send(`:x: ${args[0]} nem egy felhasználó!`);
        if(!reason) return message.channel.send(`:x: Adj meg egy indokot! (**${prefix}report [@név] [indok])**`);
        if (!mention) return;
        let embed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("EGY FELHASZNÁLÓT BEREPORTOLTAK!")
        .addField("Bejelentő:", `${message.author.username}`, true)
        .addField("Bejelentett:", `${mention}`, true)
        .addField("Csatorna:", `${message.channel.name}`, true)
        .addField("Indok:", `${mentionMessage}`, true)
        .setFooter(`${bot.user.username}`, bot.user.avatarURL)
        .setTimestamp()
        
        message.channel.send(`:white_check_mark: **${message.author.username}**, sikeresen elküldtem a reportod az adminok felé! Köszönjük!`);
        ch.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}report parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}szerverotlet` || cmd == `${prefix}szerverötlet`) {
        const suggestchannel = message.guild.channels.find(x => x.name === "ötletek");
        if (!suggestchannel) return message.channel.send(":x: Nem találom az **ötletek** csatornát! Kérlek rakd feljebb a rangom, vagy készíts egyet!");
        let otlet = args.slice(0).join(" ");
        if(!otlet) return message.channel.send(`:x: Add meg az ötletedet! (**${prefix}otlet [ötleted])**`);
        let embed0 = new Discord.RichEmbed()
        .setColor("GREEN")
        .setTitle("EGY ÖTLET ÉRKEZETT!")
        .addField("Bejelentő:", `${message.author.username}`)
        .addField("Ötlet:", `${otlet}`)
        .setFooter(`${bot.user.username}`, bot.user.avatarURL)
        .setTimestamp()

        message.channel.send(`:white_check_mark: **${message.author.username}**, sikeresen elküldtem a szerver ötleted az adminok felé! Köszönjük!`);
        ch1.send(embed0);
        message.delete();
        console.log(`${message.author.username} használta a(z) ${prefix}szerverotlet parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}bototlet` || cmd == `${prefix}botötlet`) {
        let otlet = args.slice(0).join(" ");
        if(!otlet) return message.channel.send(`:x: Add meg az ötletedet! (**${prefix}botötlet [ötleted])**`);
        let embed0 = new Discord.RichEmbed()
        .setColor("GREEN")
        .setTitle("EGY ÖTLET ÉRKEZETT!")
        .addField("Bejelentő:", `${message.author.username}`)
        .addField("Ötlet:", `${otlet}`)
        .setFooter(`${bot.user.username}`, bot.user.avatarURL)
        .setTimestamp()

        message.channel.send(`:white_check_mark: **${message.author.username}**, sikeresen elküldtem a bot ötleted a fejlesztők felé! Köszönjük!`);
        bototletcsatorna.send(embed0);
        console.log(`${message.author.username} használta a(z) ${prefix}bototlet parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}szerverhiba`) {
        const suggestchannel = message.guild.channels.find(x => x.name === "hibák");
        if (!suggestchannel) return message.channel.send(":x: Nem találom a **hibák** csatornát! Kérlek rakd feljebb a rangom, vagy készíts egyet!");
        let hiba = args.slice(0).join(" ");
        if(!hiba) return message.channel.send(`:x: Add meg a hibát! (**${prefix}hiba [hiba])**`);
        let embed1 = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("EGY HIBA ÉRKEZETT!")
        .addField("Bejelentő:", `${message.author.username}`)
        .addField("Ötlet:", `${hiba}`)
        .setFooter(`${bot.user.username}`, bot.user.avatarURL)
        .setTimestamp()

        message.channel.send(`:white_check_mark: **${message.author.username}**, sikeresen elküldtem a szerver hibát az adminok felé! Köszönjük!`);
        ch2.send(embed1);
        message.delete();
        console.log(`${message.author.username} használta a(z) ${prefix}szerverhiba parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }    
    if(cmd == `${prefix}bothiba`) {
        let hiba = args.slice(0).join(" ");
        if(!hiba) return message.channel.send(`:x: Add meg a hibát! (**${prefix}hiba [hiba])**`);
        let embed1 = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("EGY HIBA ÉRKEZETT!")
        .addField("Bejelentő:", `${message.author.username}`)
        .addField("Ötlet:", `${hiba}`)
        .setFooter(`${bot.user.username}`, bot.user.avatarURL)
        .setTimestamp()

        message.channel.send(`:white_check_mark: **${message.author.username}**, sikeresen elküldtem a szerver hibát az adminok felé! Köszönjük!`);
        bothibacsatorna.send(embed1);
        console.log(`${message.author.username} használta a(z) ${prefix}bothiba parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}invite`) {
        message.reply("a botomat az alábbi linken invitelheted be bárhová: https://discord.com/api/oauth2/authorize?client_id=728272690531532812&permissions=8&scope=bot");
        console.log(`${message.author.username} használta a(z) ${prefix}invite parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}kick`) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához! (Szükséges jog: \`Kick\`)");
        let toKick = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!args[0]) return message.channel.send(`:x: Jelöld meg azt a felhasználót, akit kickelni szeretnél! (**${prefix}kick [@név] [indok]**)`);
        if(!toKick) return message.channel.send(`:x: ${args[0]} nem egy felhasználó!`);
        if(!reason) return message.channel.send(`:x: Adj meg egy indokot! (**${prefix}kick [@név] [indok]**)`);

        if(!toKick.kickable) {
            return message.channel.send(`:x: Őt nem kickelhetem mert egy admin/moderátor!`);
        }

        if(toKick.kickable) {
            let x = new Discord.RichEmbed()
            .setColor("RED")
            .setTitle("Kick")
            .addField(`Akit kickeltek:`, `${toKick}`)
            .addField("Aki kickelte:", `${message.author}`)
            .addField("Indok:", `${reason}`)
            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
            .setTimestamp()

            message.channel.send(x);
            //message.user.send(`**${message.author}** kikickelt a **${message.guild.name}** Discord szerverről. Oka: **${reason}**!`);
            toKick.kick();
        }
        console.log(`${message.author.username} használta a(z) ${prefix}kick parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}ban`) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához! (Szükséges jog: \`Ban\`)");
        let toBan = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!args[0]) return message.channel.send(`:x: Kérlek jelöld meg azt a felhasználót, akit bannolni szeretnél! (**${prefix}ban [@név] [indok]**)`);
        if(!toBan) return message.channel.send(`:x: ${args[0]} nem egy felhasználó!`);
        if(!reason) return message.channel.send(`:x: Adj meg egy indokot! (**${prefix}ban [@név] [indok]**)`);

        if(!toBan.bannable) {
            return message.channel.send(`:x: Őt nem bannolhatom mert egy admin/moderátor!`);
        }

        if(toBan.bannable) {
            let x = new Discord.RichEmbed()
            .setColor("RED")
            .setTitle("Ban")
            .addField(`Akit bannoltak:`, `${toBan}`)
            .addField("Aki bannolta:", `${message.author}`)
            .addField("Indok:", `${reason}`)
            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
            .setTimestamp()

            message.channel.send(x);
            //message.mentionedUser.send(`**${message.author}** kitiltott a **${message.guild.name}** Discord szerverről. Oka: **${reason}**!`);
            toBan.ban();
        }
        console.log(`${message.author.username} használta a(z) ${prefix}ban parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}mute`) {
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához! (Szükséges jog: \`Rangkezelés\`)");
        let muterole = message.guild.roles.find(muterole => muterole.name === "Muted");
        if(!muterole){
            try{
              muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions:[]
              })
              message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    SPEAK: false
                });
              });
            }catch(e){
              console.log(e.stack);
            }
          }
        let toMute = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!args[0]) return message.channel.send(`:x: Kérlek jelöld meg azt a felhasználót, akit muteolni szeretnél! (**${prefix}mute [@név] [indok]**)`);
        if(!toMute) return message.channel.send(`:x: ${args[0]} nem egy felhasználó!`);
        if(!reason) return message.channel.send(`:x: Adj meg egy indokot! (**${prefix}mute [@név] [indok]**)`);
        /*if(toMute.member.roles.has(muterole)) {
            return message.channel.send(":x: Ő már muteolva van!");
          }*/
        if(!toMute.bannable) {
            return message.channel.send(`:x: Őt nem muteolhatom mert egy admin/moderátor!`);
        }
        if(toMute.bannable) {
            let embed10 = new Discord.RichEmbed()
            .setColor("RED")
            .setTitle("Mute")
            .addField(`Akit muteoltak:`, `${toMute}`)
            .addField("Aki muteolta:", `${message.author}`)
            .addField("Indok:", `${reason}`)
            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
            .setTimestamp()
            message.channel.send(embed10);
        }
        //message.channel.send(embed10);
        toMute.addRole(muterole);
        message.channel.send(`:white_check_mark: ${toMute}-ra/re sikeresen készítettem, és ráadtam a **Muted** rangot. Kérlek húzd feljebb a rangot hogy működjön a parancs!`);
        console.log(`${message.author.username} használta a(z) ${prefix}mute parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}unmute`) {
        let toUnMute = message.mentions.members.first();
        let unmuterole = message.guild.roles.find(unmuterole => unmuterole.name === "Muted");
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához! (Szükséges jog: \`Rangkezelés\`)");
        if (!args[0]) return message.channel.send(`:x: Kérlek jelöld meg azt a felhasználót, akit unmuteolni szeretnél! (**${prefix}unmute [@név]**)`);
        if(!toUnMute) return message.channel.send(`:x: ${args[0]} nem egy felhasználó!`);
        {
            let embed2 = new Discord.RichEmbed()
            .setColor("GREEN")
            .setTitle("Unmute")
            .addField(`Akit unmuteoltak:`, `${toUnMute}`)
            .addField("Aki unmuteolta:", `${message.author}`)
            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
            .setTimestamp()
            message.channel.send(embed2);
        }
        toUnMute.removeRole(unmuterole);
        console.log(`${message.author.username} használta a(z) ${prefix}unmute parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}warn` || cmd == `${prefix}figyelmeztet`) {
        let toWarn = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához. (Szükséges jog: \`Rangkezelés\`)");
        if (!args[0]) return message.channel.send(`:x: Kérlek jelöld meg azt a felhasználót, akit warnolni szeretnél! (**${prefix}warn [@név] [indok]**)`);
        if(!toWarn) return message.channel.send(`:x: ${args[0]} nem egy felhasználó!`);
        if(!reason) return message.channel.send(`:x: Adj meg egy indokot! (**${prefix}warn [@név] [indok]**)`);
        if(!toWarn.bannable) {
            return message.channel.send(`:x: Őt nem muteolhatom mert egy admin/moderátor!`);
        }
        if(toWarn.bannable) {
            let embed10 = new Discord.RichEmbed()
            .setColor("RED")
            .setTitle("Warn")
            .addField(`Akit warnoltak`, `${toWarn}`)
            .addField("Aki warnolta:", `${message.author}`)
            .addField("Indok:", `${reason}`)
            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
            .setTimestamp()
            message.channel.send(embed10);
            db.add(`warn_${toWarn.id}`, reason)
            db.add(`warn_${toWarn.id}`, Date.now())
        }
    }
    if(cmd == `${prefix}warnlist` || cmd == `${prefix}figyelmezteteslista` || cmd == `${prefix}figyelmeztetéslista`) {
        let toWarnlist = message.mentions.members.first();
        let warnlist = db.fetch(`warn_${toWarnlist.id}`)
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához. (Szükséges jog: \`Rangkezelés\`)");
        if (!args[0]) return message.channel.send(`:x: Kérlek jelöld meg azt a felhasználót, akit warnolni szeretnél! (**${prefix}warnlist [@név]**)`);
        if(!toWarnlist) return message.channel.send(`:x: ${args[0]} nem egy felhasználó!`);
        if(toWarnlist) {
            let embed = new Discord.RichEmbed()
            .setColor("RED")
            .setTitle(`${toWarnlist} warnjai`)
            .addField(`Ezeket a warnokat kapta:`, `${warnlist}`)
            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
            .setTimestamp()
            message.channel.send(embed);
        }
    }
    if(cmd == `${prefix}cc` || cmd == `${prefix}clear` || cmd == `${prefix}clearchat`) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához. (Szükséges jog: \`Üzenetkezelés\`)");
        if(!args[0]) return message.channel.send(`:x: Kérlek add meg, mennyi üzenetet szeretnél törölni!`);
        message.delete();
        message.channel.bulkDelete(args[0]).catch(e => { message.channel.send(":x: Csak 100 üzenetet törölhetsz először!")});
        message.channel.send(`:white_check_mark: Sikeresen töröltél **${args[0]}** üzenetet!`).then(m => m.delete( {timeout: 10000}));
        console.log(`${message.author.username} használta a(z) ${prefix}cc parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}userinfo`) {
        let user = message.mentions.members.first() || message.member;
        if(user.presence.status === "dnd") user.presence.status = "Elfoglalt";
        if(user.presence.status === `idle`) user.presence.status = "Tétlen";
        if(user.presence.status === `offline`) user.presence.status = "Láthatatlan";
        if(user.presence.status === `online`) user.presence.status = "Elérhető";
        if(user.presence.status === null) user.presence.game = "Nem játszik";
        const member = user;
        const roles = user.roles;
        if(!args[0]) return message.channel.send(`:x: Kérlek jelöld meg azt a felhasználót, akinek azt, akinek az információit szeretnéd látni! (**${prefix}userinfo [@név]**)`)
        if(!user) return message.channel.send(`:x: ${args[0]} nem egy felhasználó!`);
        if(user) {
            const embed =  new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(user.avatarURL)
            .setTitle(`${user} információi`, user.displayAvatarURL)
            .addField("Felhasználóneve:", `${user}`)
            .addField("ID-je:", user.id)
            //.addField("Rangjai:", user.roles.has(roles => `${roles}`).join(' '), true)
            .addField("Játékban:", user.presence.game)
            .addField("Állapota:", user.presence.status)
            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
            .setTimestamp()
            message.channel.send(embed);
        }
        console.log(`${message.author.username} használta a(z) ${prefix}userinfo parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}egyenleg` || cmd == `${prefix}bal` || cmd == `${prefix}balance`) {
        let user = message.mentions.members.first() || message.member;
        let money = db.fetch(`money_${user.id}`);

        if (money == null) money = 0
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username} egyenlege`)
        .setDescription(`Jelenleg ${money} dollár van a pénztárcádban!`)
        .setFooter(`${bot.user.username}`, bot.user.avatarURL)
        .setTimestamp()
        message.channel.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}egyenleg parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}daily` || cmd == `${prefix}napi`) {
        let timeout0 = 86400000;
        let amount = 764;
        let daily = await db.fetch(`daily_${message.author.id}`)
        if(daily != null && timeout0 - (Date.now() - daily) > 0) {
            let time = ms(timeout0 - (Date.now() - daily));
            message.channel.send(`:x: Te már igényelted a napi nyereményt. Próbáld újra **${time.hours} óra ${time.minutes} perc és ${time.seconds} másodperc** múlva!`);
        } else {
            let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Napi nyeremény")
            .setDescription(`Sikeresen szereztél ${amount} dollárt!`)
            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
            .setTimestamp();
            message.channel.send(embed);
            db.add(`money_${message.author.id}`, amount)
            db.add(`daily_${message.author.id}`, Date.now())
        }
        console.log(`${message.author.username} használta a(z) ${prefix}napi parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}hourly` || cmd == `${prefix}orai` || cmd == `${prefix}órai`) {
        let timeout1 = 3600000;
        let amount = 442;
        let hourly = await db.fetch(`hourly_${message.author.id}`);
        if (hourly != null && timeout1 - (Date.now() - hourly) > 0) {
            let time = ms(timeout1 - (Date.now() - hourly));
            message.channel.send(`:x: Te már igényelted az órai nyereményt. Próbáld újra **${time.hours} óra ${time.minutes} perc és ${time.seconds} másodperc** múlva!`);
        } else {
            let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Órai nyeremény")
            .setDescription(`Sikeresen szereztél ${amount} dollárt, az órai nyereményből!`)
            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
            .setTimestamp();
            message.channel.send(embed);
            db.add(`money_${message.author.id}`, amount)
            db.add(`hourly_${message.author.id}`, Date.now())
        }
        console.log(`${message.author.username} használta a(z) ${prefix}órai parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}work` || cmd == `${prefix}dolgozas` || cmd == `${prefix}dolgozás`) {
        let timeout2 = 10800000;
        let amount = 312;
        let work = await db.fetch(`work_${message.author.id}`)
        if (work != null && timeout2 - (Date.now() - work) > 0) {
            let time = ms(timeout2 - (Date.now() - work));
            message.channel.send(`:x: Te már dolgoztál, most pihensz. Próbáld újra **${time.hours} óra ${time.minutes} perc és ${time.seconds} másodperc** múlva!`);
        } else {
            let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Dolgozás")
            .setDescription(`Sikeresen programoztál egy alkalmazást, ezért szereztél ${amount} dollárt!`)
            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
            .setTimestamp();
            message.channel.send(embed);
            db.add(`money_${message.author.id}`, amount)
            db.add(`work_${message.author.id}`, Date.now())
        }
        console.log(`${message.author.username} használta a(z) ${prefix}work parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}rob` || cmd == `${prefix}rablas` || cmd == `${prefix}rablás`) {
        let timeout3 = 10800000;
        let amount = 432;
        let rob = await db.fetch(`rob_${message.author.id}`)
        if (rob != null && timeout3 - (Date.now() - rob) > 0) {
            let time = ms(timeout3 - (Date.now() - rob));
            message.channel.send(`:x: Te már raboltál, tevagy a csipsz dm banda tagja?. Próbáld újra **${time.hours} óra ${time.minutes} perc és ${time.seconds} másodperc** múlva!`);
        } else {
            let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Rablás")
            .setDescription(`Sikeresen kiraboltad az ATM-et, ezért szereztél ${amount} dollárt!`)
            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
            .setTimestamp();
            message.channel.send(embed);
            db.add(`money_${message.author.id}`, amount)
            db.add(`rob_${message.author.id}`, Date.now())
        }
        console.log(`${message.author.username} használta a(z) ${prefix}rablás parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}slut`) {
        let timeout4 = 10800000;
        let amount = 249;
        let slut = await db.fetch(`slut_${message.author.id}`)
        if (slut != null && timeout4 - (Date.now() - slut) > 0) {
            let time = ms(timeout4 - (Date.now() - slut));
            message.channel.send(`:x: Te már élvezkedtél. Próbáld újra **${time.hours} óra ${time.minutes} perc és ${time.seconds} másodperc** múlva!`);
        } else {
            let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Élvezkedés")
            .setDescription(`Sikeresen élvezkedtél a barátnőddel, ezért szereztél ${amount} dollárt!`)
            .setFooter(`${bot.user.username}`, bot.user.avatarURL)
            .setTimestamp();
            message.channel.send(embed);
            db.add(`money_${message.author.id}`, amount)
            db.add(`slut_${message.author.id}`, Date.now())
        }
        console.log(`${message.author.username} használta a(z) ${prefix}slut parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}horgaszas` || cmd == `${prefix}horgászas` || cmd == `${prefix}horgászás` || cmd == `${prefix}halaszas` || cmd == `${prefix}halászas` || cmd == `${prefix}halászás` || cmd == `${prefix}halaszás` || cmd == `${prefix}horgaszás`) {
      let timeout5 = 10800000;
      let amount = 249;
      let horgaszas = await db.fetch(`horgaszas_${message.author.id}`)
      if (horgaszas != null && timeout5 - (Date.now() - horgaszas) > 0) {
          let time = ms(timeout5 - (Date.now() - horgaszas));
          message.channel.send(`:x: Te már horgásztál. Próbáld újra **${time.hours} óra ${time.minutes} perc és ${time.seconds} másodperc** múlva!`);
      } else {
          let embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("Halászás")
          .setDescription(`Sikeresen halásztál, ezért szereztél ${amount} dollárt!`)
          .setFooter(`${bot.user.username}`, bot.user.avatarURL)
          .setTimestamp();
          message.channel.send(embed);
          db.add(`money_${message.author.id}`, amount)
          db.add(`horgaszas_${message.author.id}`, Date.now())
      }
      console.log(`${message.author.username} használta a(z) ${prefix}horgászás parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
  }
    if(cmd == `${prefix}template`) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához. (Szükséges jog: \`Adminisztrátor\`)");
        message.channel.send(`:white_check_mark: Kérlek töröld az összes rangot, mert a bot készít őket! Ha kész, írd be a **${prefix}templateigen** parancsot!`)
        console.log(`${message.author.username} használta a(z) ${prefix}template parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}templateigen`) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához. (Szükséges jog: \`Adminisztrátor\`)");
        message.channel.send(`:white_check_mark: Roleok készítése folyamatban...`)
        try{
              muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions:[]
              })
              message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    SPEAK: false
                });
              });
            }catch(e){
              console.log(e.stack);
            }
            try{
                muterole = await message.guild.createRole({
                  name: "Rendszergazda",
                  color: "#000000",
                  permissions:[]
                })
                message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true,
                      SEND_TTS_MESSAGES: true,
                      ATTACH_FILES: true,
                      SPEAK: true
                  });
                });
              }catch(e){
                console.log(e.stack);
              }
              try{
                muterole = await message.guild.createRole({
                  name: "Discord fejlesztő",
                  color: "#000000",
                  permissions:[]
                })
                message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true,
                      SEND_TTS_MESSAGES: true,
                      ATTACH_FILES: true,
                      SPEAK: true
                  });
                });
              }catch(e){
                console.log(e.stack);
              }
              try{
                muterole = await message.guild.createRole({
                  name: "Főadminisztrátor",
                  color: "#000000",
                  permissions:[]
                })
                message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true,
                      SEND_TTS_MESSAGES: true,
                      ATTACH_FILES: true,
                      SPEAK: true
                  });
                });
              }catch(e){
                console.log(e.stack);
              }
              try{
                muterole = await message.guild.createRole({
                  name: "Adminisztrátor",
                  color: "#000000",
                  permissions:[]
                })
                message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true,
                      SEND_TTS_MESSAGES: true,
                      ATTACH_FILES: true,
                      SPEAK: true
                  });
                });
              }catch(e){
                console.log(e.stack);
              }
              try{
                muterole = await message.guild.createRole({
                  name: "Adminsegéd",
                  color: "#000000",
                  permissions:[]
                })
                message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true,
                      SEND_TTS_MESSAGES: true,
                      ATTACH_FILES: true,
                      SPEAK: true
                  });
                });
              }catch(e){
                console.log(e.stack);
              }
              try{
                muterole = await message.guild.createRole({
                  name: "Admin Team",
                  color: "#000000",
                  permissions:[]
                })
                message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true,
                      SEND_TTS_MESSAGES: true,
                      ATTACH_FILES: true,
                      SPEAK: true
                  });
                });
              }catch(e){
                console.log(e.stack);
              }
              try{
                muterole = await message.guild.createRole({
                  name: "V.I.P.",
                  color: "#000000",
                  permissions:[]
                })
                message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true,
                      SEND_TTS_MESSAGES: false,
                      ATTACH_FILES: true,
                      SPEAK: true
                  });
                });
              }catch(e){
                console.log(e.stack);
              }
              try{
                muterole = await message.guild.createRole({
                  name: "Kiemelt",
                  color: "#000000",
                  permissions:[]
                })
                message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true,
                      SEND_TTS_MESSAGES: false,
                      ATTACH_FILES: true,
                      SPEAK: true
                  });
                });
              }catch(e){
                console.log(e.stack);
              }
              try{
                muterole = await message.guild.createRole({
                  name: "Tag",
                  color: "#000000",
                  permissions:[]
                })
                message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true,
                      SEND_TTS_MESSAGES: true,
                      ATTACH_FILES: true,
                      SPEAK: true
                  });
                });
              }catch(e){
                console.log(e.stack);
              }
              message.channel.send(`:white_check_mark: A roleok sikeresen elkészítve! A channelek készítése folyamatban...`)
              console.log(`${message.author.username} használta a(z) ${prefix}templateigen parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
            }
    if(cmd == `${prefix}giveaway`) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához. (Szükséges jog: \`Adminisztrátor\`)");
        if(!args[0]) return message.channel.send(`:x: Kérlek add meg mennyi időt tartson a giveaway! (**m=perc, h=óra, d=nap**) (**${prefix}giveaway [idő] [#csatorna] [nyeremény]**)`);
        if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")) return message.channel.send(":x: Helytelen idő!");
        if(isNaN(args[0][0])) return message.channel.send(`:x: Ez nem egy szám!`);
        let channel = message.mention.channels.first()
        if(!channel) return message.channel.send(`:x: Nem találom a csatornát, ahol a giveaway legyen. Kérlek említs meg egyet, vagy rakd feljebb a rangom! (**${prefix}giveaway [idő] [#csatorna] [nyeremény]**)`);
        let prize = args.sluce(2).join(" ")
        if(!prize) return message.channel.send(`:x: Kérlek add meg a nyereményt! (**${prefix}giveaway [idő] [#csatorna] [nyeremény]**)`);
        message.channel.send(`:robot: Giveaway van a **${channel}** csatornában! Csapjatok rá minél hamarabb!`);
        let dcembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Giveaway")
        .addField("Nyeremény:", `${prize}`)
        .addField("Hostolta:", `${message.author}`)
        .setFooter(`${bot.user.username}`, bot.user.avatarURL)
        .setTimestamp();
        let m = await message.channel.send(dcembed);
        m.react(":tada:")
        setTimeout(() => {
            if(m.reactions.cache.size==0) return message.channel.send(`:robot: Sajnos nem volt nyertes, mert nem nyomta meg senki a reakciót!`);
            let winner = m.reactions.cache.get(":tada:").users.cache.filter(u=>!u.bot).random()
            message.channel.send(`:robot: A **${prize}** nyertese... **${winner}**`);
        }, ms(args[0]));
        console.log(`${message.author.username} használta a(z) ${prefix}giveaway parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}addrole`) {
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`:x: Nincs jogosultságod a parancs használatához! (Szükséges jog: \`Rangkezelés\`)`);
        let felh = message.guild.member(message.mentions.users.first())
        if(!felh) return message.channel.send(`:x: Kérlek jelöld meg azt a felhasználót, akire ráadjam az adott rangot! (**${prefix}addrole [@név] [@rang])**`);
        let args = message.content.split(" ").slice(2);
        if(!args) return message.channel.send(`:x: Nem jelöltél meg rangot! (**${prefix}addrole [@név] [@rang])**`);
        let rolename = message.mentions.roles.first();
        if(!rolename) return message.channel.send(':x: Nem létezik ilyen rang!');

        felh.addRole(rolename.id)
        let embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setTitle("Rang adás")
        .addField("Adta:", `${message.author}`)
        .addField("Kapta:", `${felh.user.username}`)
        .addField("A rang:", `${rolename}`)
        .setFooter(`${bot.user.username}`, bot.user.avatarURL)
        .setTimestamp();
        message.channel.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}addrole parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}takerole`) { 
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`:x: Nincs jogosultságod a parancs használatához! (Szükséges jog: \`Rangkezelés\`)`);
        let felh = message.guild.member(message.mentions.users.first())
        if(!felh) return message.channel.send(`:x: Kérlek jelöld meg azt a felhasználót, akinek el szeretnéd hogy vegyem a rangját! (**${prefix}takerole [@név] [@rang]**)`);
        let args = message.content.split(" ").slice(2);
        if(!args) return message.channel.send(`:x: Nem jelöltél meg rangot! (**${prefix}takerole [@név] [@rang]**)`);
        let rolename = message.mentions.roles.first();
        if(!rolename) return message.channel.send(':x: Nem létezik ilyen rang!');
        felh.removeRole(rolename)
        let embed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("Rang elvétel")
        .addField("Elvette:", `${message.author}`)
        .addField("Elvesztette:", `${felh.user.username}`)
        .addField("A rang:", `${rolename}`)
        .setFooter(`${bot.user.username}`, bot.user.avatarURL)
        .setTimestamp();
        message.channel.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}takerole parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
}); 

bot.login(process.env.token)
