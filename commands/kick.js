const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var messageArray = message.content.split(" ");

    var arguments = messageArray.slice(1);

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if(!kickUser) 
    return message.channel.send("De gebruiker is verkeerd ingevoerd!");

    var reason = arguments.join(" ").slice(kickUser.length + 4);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Probeer je dit nou echt?");

    if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Waarom wil je een admin kicken?");

    var kick = new discord.MessageEmbed()
    .setTitle("Kicked")
    .setColor("#000000")
    .addField("Kicked user", kickUser)
    .addField("Kicked by", message.author)
    .addField("Reden", reason)
    .setFooter("Made by Minkel");

    message.guild.member(kickUser).kick(reason);

    message.channel.send(kick);



    return;
    
    
}
module.exports.help = { 
    name: "kick"
}