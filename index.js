const botconfig = require("./botconfig.json");
const tokenfile = require("./tokenfile.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
let prefix = botconfig.prefix;

bot.on("ready", async () => {
    console.log(`${bot.user.username} online lett ${bot.guilds.size} szerveren!`)
    bot.user.setActivity("!help", {type: "PLAYING"});
});

bot.on("guildMemberAdd", function(member) {
    let ch = member.guild.channels.find(`name`, `👉új-tagok`);
    let r = member.roles.find(`name`, `Civil`);
    
    ch.send(`Üdvözlünk a szerveren **${member}>**`)
    member.addRole(r,id);
});

//------------------------ M Á S  F A J T A  P A R A N C S O K ---------------------
bot.on("message", message => {
    if(message.author.bot) return;

    if(message.content.startsWith(`${prefix}online`)){
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        message.channel.send(`A bot ennyi ideje online: ${days}nap ${hours}óra ${minutes}perc ${seconds}másodperc `)
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
        .setFooter(`Joya bot`, bot.user.avatarURL)
        message.channel.send(embed)
        console.log(`${message.author.username} használta a(z) ${prefix}szerverinfo parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
      }
      //---------------------------------------------------------------------------------------
      if(message.content.startsWith(`${prefix}addrole`)){
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Nincs jogod ehhez!')
        let felh = message.guild.member(message.mentions.users.first())
        if(!felh) return message.reply('Nem jelöltél meg senkit.')
        let args = message.content.split(" ").slice(2);
        if(!args) return message.reply('Nem jelölted meg a rangot.')
        let rolename = message.guild.roles.find(`name`, `${args}`)
        if(!rolename) return message.reply('Nem létezik ilyen rang')

        felh.addRole(rolename.id)
        message.channel.send(`${felh.user.username} megkapta a ${rolename} rangot.`)
    }
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
            message.reply("ez a szó tiltott!").then(r =>r.delete(5000));
        }
    }
    let blacklist1 = ["mizu", "mizu?", "mizi"];
    for(let i = 0; i < blacklist1.length; i++) {
        if(messageArray.includes(blacklist1[i], 0)) {
            message.delete();
            message.reply("velem semmi, éppen elvagyok veletek. Veled? Illetve várjuk a többiek válaszát!");
        }
    }
    let blacklist2 = ["ip", "info", "web", "forum", "fórum", "weboldal", "facebook", "szerver", "server"];
    for(let i = 0; i < blacklist2.length; i++) {
        if(messageArray.includes(blacklist2[i], 0)) {
            message.delete();
            message.reply("itt vannak az információk - **IP: demon.sunwell.hu:7837, fórum: wwww.diamondrp.hu, SA:MP szerver");
        }
    }
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setFooter(`Joya bot`, bot.user.avatarURL)
    .setTimestamp()

     //--------------------------- P A R A N C S O K ----------------------



     if (cmd == `${prefix}help`) {
        let embed = new Discord.RichEmbed()
        .setTitle("Bot parancsok", "www.diamondrp.hu")
        .setColor("RANDOM")
        .addField(`A bot prefixe:`, `${prefix}`)
        .addField(`A bot parancsai:`, `${prefix}embed, ${prefix}szerencsejatek, ${prefix}ping, ${prefix}online, ${prefix}report, ${prefix}szerverinfo`)
        .addField(`Moderátori parancsok:`, `${prefix}ahelp`)
        .addField("Bot infok:", "A bot JavaScriptben készül, fejlesztője: Troll+#5256")
        .addBlankField()
        .setFooter(`Joya bot`, bot.user.avatarURL)
        .setTimestamp()

        message.channel.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}help parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
    if (cmd == `${prefix}ahelp`) {
        let embed = new Discord.RichEmbed()
        .setTitle("Moderátori parancsok", "www.diamondrp.hu")
        .setColor("RANDOM")
        .addField(`A bot prefixe:`, `${prefix}`)
        .addField(`Moderátori parancsok:`, `${prefix}ban, ${prefix}kick, ${prefix}cc`)
        .addBlankField()
        .setFooter(`Joya bot`, bot.user.avatarURL)
        .setTimestamp()

        message.channel.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}ahelp parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);        
    }
        if (cmd == `${prefix}embed`) {
        let embed = new Discord.RichEmbed()
        .setTitle("Cím", "www.diamondrp.hu")
        .setColor("RANDOM")
        .setDescription("leírás")
        .addField("mező cím", "(mező értéke)[www.diamondrp.hu]")
        .addBlankField()
        .setFooter(`Joya bot`, bot.user.avatarURL)
        .setTimestamp()

        message.channel.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}emblade parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }        
    if(cmd == `${prefix}szerencsejatek`) {
        let embed = new Discord.RichEmbed()
        let sum = Math.floor(Math.random() * 6) +1;

        embed.setColor("PURPLE");
        embed.addField("Szerencsejáték", `A mostani kidobott számod: ${sum}`);
        embed.setFooter(`Joya bot`, bot.user.avatarURL)
        embed.addBlankField();

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
        .setFooter(`Joya bot`, bot.user.avatarURL)
        
        message.channel.send(pembed)
        console.log(`${message.author.username} használta a(z) ${prefix}ping parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
     }
     if(cmd == `${prefix}report`) {
        if (!mention) return;
        let embed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("EGY FELHASZNÁLÓT BEREPORTOLTAK!")
        .addField("Bejelentő:", `${message.author.username}`, true)
        .addField("Bejelentett:", `${mention}`, true)
        .addField("Csatorna:", `${message.channel.name}`, true)
        .addField("Indok:", `${mentionMessage}`, true);
        
        ch.send(embed);
        console.log(`${message.author.username} használta a(z) ${prefix}report parancsot, szerver neve: ${message.guild.name}, idő: ${message.createdAt}, csatorna neve: ${message.channel.name}!`);
    }
});

bot.login(process.env.token)
