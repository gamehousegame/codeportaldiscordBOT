const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var messageArray = message.content.split(" ");

    var arguments = messageArray.slice(1);

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if(!banUser) 
    return message.channel.send("De gebruiker is verkeerd ingevoerd!");

    var reason = arguments.join(" ").slice(banUser.length + 4);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Probeer je dit nou echt?");

    if(banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Waarom wil je een admin bannen?");

    var ban = new discord.MessageEmbed()
    .setTitle("Banned")
    .setColor("#000000")
    .addField("Banned user", banUser)
    .addField("Banned by", message.author)
    .addField("Reden", reason)
    .setFooter("Made by Minkel");

    message.guild.member(banUser).ban(reason);

    message.channel.send(ban);



    return;
    
    
}
module.exports.help = { 
    name: "ban"
}