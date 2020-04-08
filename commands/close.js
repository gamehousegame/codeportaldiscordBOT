const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{


    var closeUser = message.author;


    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Jij hebt hier geen permissies voor!");
    message.channel.delete();
    
    return;

}

module.exports.help = { 
    name: "close"
}