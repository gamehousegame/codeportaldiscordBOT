const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var messageArray = message.content.split(" ");

    var arguments = messageArray.slice(1);

    var ideeUser = message.author;
    var idee = arguments.join(" ").slice(ideeUser.length + 4);
    if(!idee) return message.reply("Je bent vergeten een idee mee te geven!");

  var ideeChannel = message.guild.channels.cache.find(c => c.id === '697073719935369239');

    var ideeEmbed = new discord.MessageEmbed()
    .setTitle("Idee")
    .setColor("#000000")
    .addField("Member", ideeUser)
    .addField("Idee", idee)
    .setFooter("Made by Minkel");

    return ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });

}

module.exports.help = { 
    name: "idee"
}