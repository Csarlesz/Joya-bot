const Discord = require("discord.js")
const botconfig = require("../botconfig.json")
let prefix = botconfig.prefix;

module.exports.run = async (kliens, message, args) => {

        if (message.content.startsWith(`${prefix}math`)) {
      
            var math1 = args[0];
            if(isNaN(args[0])) return message.channel.send('Számot adj meg');
            var math2 = args[1];
            if(isNaN(args[1])) return message.channel.send('Számot adj meg');
          var matek = math1 * math2
          console.log(matek)
         message.channel.send(matek)
        }

module.exports.config = {
    name: "math", 
    description: "math", 
    usage: "!?math", 
     accessableby: "Moderators", 
     aliases: ["math", "200iq", "members"] 
    
    }
}