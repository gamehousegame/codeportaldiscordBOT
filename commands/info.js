const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var icon = message.guild.iconURL;

        var serverEmbed = new discord.MessageEmbed()
            .setTitle("Server Info")
            .setColor("#000000")
            .addField("Server naam", message.guild.name)
            .addField("Members", message.guild.memberCount)
            .addField("Gejoined op", message.member.joinedAt)
            .setFooter("Made by Minkel");



        return message.channel.send(serverEmbed);
    


}

module.exports.help = { 
    name: "info"
}