const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    const aantalSterren = args[0]; 
    if(!aantalSterren || aantalSterren < 1 || aantalSterren > 5) return message.reply("Je moet een cijfer geven! (1/5)");

    const bericht = args.splice(1, args.length).join('') || 'Geen bericht';
    
    var stars = "";

    for (var i = 0; i < aantalSterren; i++) {
        stars += ":star: ";
    }

    message.delete();

    var reviewRole = message.guild.roles.cache.find(r => r.id ==  '697100889961529475');

var reviewEmbed = new discord.MessageEmbed()
    .setTitle("Review")
    .setColor("#000000")
    .addField("Sterren 1/5", stars)
    .addField("Review", bericht)
    .setFooter("Made by Minkel");


    
    return message.guild.channels.cache.find(c => c.id === '697073899791188009').send(reviewEmbed); 

}

module.exports.help = { 
    name: "review"
}