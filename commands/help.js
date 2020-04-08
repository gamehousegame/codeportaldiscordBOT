const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var botEmbed = new discord.MessageEmbed()
                .setTitle("Minkel's Info")
                .setColor("#000000")
                .addFields(
                    { name: '!help', value: 'Krijg hulp van de bot' },
                    { name: '!ticket', value: 'Maak een ticket aan' },
                    { name: '!info', value: 'Krijg onze informatie' },
                    { name: '!ban', value: 'Verban een member' },
                    { name: '!kick', value: 'Kick een member' },
                    { name: '!idee', value: 'Geef ons een idee om te gebruiken!' },
                    { name: '!review', value: 'Geef ons een review' },
                    { name: '!clear', value: 'Clear een x aantal berichten' },
                    { name: '!review', value: 'Geef ons een review' },
                    { name: '!warn', value: 'Waarschuw een member' }
                )
                .setFooter("Made by Minkel");
    
            return message.channel.send(botEmbed);


}

module.exports.help = { 
    name: "help"
}