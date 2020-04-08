const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var messageArray = message.content.split(" ");

    var arguments = messageArray.slice(1);

    //var announceChannelID = client.channels.get("<ID of the channel you want to send to>").send("<your message content here>");

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Probeer je dit nou echt?");

    var announcement = arguments.join(" ");
    if(!announcement) return message.reply("Je bent vergeten een bericht mee te geven!");

    //var announceChannel = message.guild.channels.cache.find(c => c.id === '697073564095873075');
    //if(!announceChannel) return message.reply("Maak een kanaal aan die `announcement` heet!");

    var announceEmbed = new discord.MessageEmbed()
    .setTitle("Announcement")
    .setColor("#000000")
    .addField("Bericht", announcement)
    .setFooter("Made by Minkel");

    return message.guild.channels.cache.find(c => c.id === '697073564095873075').send(announceEmbed);

}

module.exports.help = { 
    name: "announcement"
}