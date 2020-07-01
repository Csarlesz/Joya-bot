const botconfig = require("./botconfig.json");
const tokenfile = require("./tokenfile.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
let prefix = botconfig.prefix;

bot.on("ready", async () => {
    console.log(`${bot.user.username} online lett ${bot.guilds.size} szerveren!`);
    var activities = [
        `${bot.guilds.size} szerveren`,
        `${prefix}help`,
        `Prefix: ${prefix}`,
        `discord.js`,
        `with your mom... :DD`,
        `in: Visual Studio Code`,
        `with: Troll+#5256 - Bot fejlesztője`,
        `Fórum: www.diamondrp.hu`,
        `Szerver IP: demon.sunwell.hu:7837`,
        `BÉTA`
    ]
    const index = Math.floor(Math.random() * activities.length + 1)
    setInterval(() => {
        bot.user.setActivity(activities[index]);
    }, 15000);
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
        .setFooter(`${bot.user.username} bot`, bot.user.avatarURL)
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
    let ch = message.guild.channels.find(n => n.name == "reports");
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
            message.reply("itt vannak az információk - **IP: demon.sunwell.hu:7837, fórum: wwww.diamondrp.hu, SA:MP szerver");
        }
    }
    let blacklist3 = ["xd", "Xd", "xD"];
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
    .setFooter(`${bot.user.username} bot`, bot.user.avatarURL)
    .setTimestamp()

     //--------------------------- P A R A N C S O K ----------------------



     if (cmd == `${prefix}help`) {
        let embed = new Discord.RichEmbed()
        .setTitle("Bot parancsok", "www.diamondrp.hu")
        .setColor("RANDOM")
        .addField(`A bot prefixe:`, `----- ${prefix} -----`)
        .addField(`A bot parancsai:`, `${prefix}embed, ${prefix}szerencsejatek, ${prefix}ping, ${prefix}online, ${prefix}report, ${prefix}szerverinfo ${prefix}botinfo ${prefix}avatar`)
        .addField(`Moderátori parancsok:`, `${prefix}ahelp`)
        .addBlankField()
        .setFooter(`${bot.user.username} bot`, bot.user.avatarURL)
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
        .addField(`Moderátori parancsok:`, `${prefix}ban, ${prefix}kick, ${prefix}cc`)
        .addBlankField()
        .setFooter(`${bot.user.username} bot`, bot.user.avatarURL)
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
    if(cmd == `${prefix}avatar`) {
        if(!args[0]) {
            message.channel.send(`:x: Kérlek jelöld meg azt a felhasználót, akinek az avatarját szeretnéd látni!`);
        }
        if (!mention) return;
        let msg = await message.channel.send(":robot: Avatár generálása...");
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
    if(cmd == `${prefix}szerencsejatek`) {
        let embed = new Discord.RichEmbed()
        let sum = Math.floor(Math.random() * 6) +1;

        embed.setColor("PURPLE");
        embed.addField("Szerencsejáték", `A mostani kidobott számod: **${sum}**`);
        embed.setFooter(`${bot.user.username} bot`, bot.user.avatarURL)
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
        .setFooter(`${bot.user.username} bot`, bot.user.avatarURL)
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
         .setFooter(`${bot.user.username} bot`, bot.user.avatarURL)
         .setTimestamp()

         message.channel.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}botinfo parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
     }
     if(cmd == `${prefix}report`) {
        if (!args[1]) {
            message.channel.send(`:x: Helytelen használat. Helyes használat: **${prefix}report [@név] [indok]**`);
        }
        if (!mention) return;
        let embed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("EGY FELHASZNÁLÓT BEREPORTOLTAK!")
        .addField("Bejelentő:", `${message.author.username}`, true)
        .addField("Bejelentett:", `${mention}`, true)
        .addField("Csatorna:", `${message.channel.name}`, true)
        .addField("Indok:", `${mentionMessage}`, true)
        .setFooter(`${bot.user.username} bot`, bot.user.avatarURL)
        .setTimestamp()
        
        ch.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}report parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}invite`) {
        message.reply("a botomat az alábbi linken invitelheted be bárhová: https://discord.com/api/oauth2/authorize?client_id=727472067808723024&permissions=8&scope=bot");
        console.log(`${message.author.username} használta a(z) ${prefix}invite parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}kick`) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához! (Szükséges jog: \`Kick\`)");
        let toKick = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!args[0]) return message.channel.send(`:x: Jelöld meg azt, akit kickelni szeretnél!`);
        if(!toKick) return message.channel.send(`:x: ${args[0]} nem egy tag!`);
        if(!reason) return message.channel.send(`:x: Adj meg egy indokot!`);

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
            .setFooter(`${bot.user.username} bot`, bot.user.avatarURL)
            .setTimestamp()

            message.channel.send(x);
            message.toKick.send(`**${message.author}** kikickelt a **${message.guild.name}** Discord szerverről. Oka: **${reason}**!`);
            toKick.kick();
        }
        console.log(`${message.author.username} használta a(z) ${prefix}kick parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}ban`) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához! (Szükséges jog: \`Ban\`)");
        let toBan = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!args[0]) return message.channel.send(`:x: Jelöld meg azt, akit bannolni szeretnél!`);
        if(!toBan) return message.channel.send(`:x: ${args[0]} nem egy tag!`);
        if(!reason) return message.channel.send(`:x: Adj meg egy indokot!`);

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
            .setFooter(`${bot.user.username} bot`, bot.user.avatarURL)
            .setTimestamp()

            message.channel.send(x);
            message.toBan.send(`**${message.author}** kitiltott a **${message.guild.name}** Discord szerverről. Oka: **${reason}**!`);
            toBan.ban();
        }
        console.log(`${message.author.username} használta a(z) ${prefix}ban parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}mute`) {
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához! (Szükséges jog: \`Üzenetkezelés\`)")
        if (!args[1]) {
            message.channel.send(`:x: Helytelen használat. Helyes használat: **${prefix}mute [@név] [indok]**`);
        }
        console.log(`${message.author.username} használta a(z) ${prefix}mute parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}unmute`) {
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához! (Szükséges jog: \`Üzenetkezelés\`)")
        if (!args[0]) {
            message.channel.send(`:x: Helytelen használat. Helyes használat: **${prefix}unmute [@név]**`);
        }
        console.log(`${message.author.username} használta a(z) ${prefix}unmute parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if(cmd == `${prefix}cc` || cmd == `${prefix}clear` || cmd == `${prefix}clearchat`) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Nincs jogosultságod a parancs használatához. (Szükséges jog: \`Üzenetkezelés\`)");
        if(!args[0]) return message.channel.send(`:x: Kérlek add meg, mennyi üzenetet szeretnél törölni!`);
        message.delete();
        message.channel.bulkDelete(args[0]).catch(e => { message.channel.send(":x: Csak 100 üzenetet törölhetsz először!")});
        message.channel.send(`:white_check_mark: Sikeresen töröltél **${args[0]}** üzenetet!`).then(m => m.delete( {timeout: 10000}));
        console.log(`${message.author.username} használta a(z) ${prefix}cc parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }     
});

bot.login(process.env.token)
