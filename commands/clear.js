const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    // !clear  (aantal)

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Probeer je dit nou echt?");

    if(!args[0]) return message.reply("Vul een getal achter `!clear` in");

    if(Number.isInteger(parseInt(args[0]))){

        var amount = parseInt(args[0]) + 1;
        var amountText = parseInt(args[0]);

        message.channel.bulkDelete(amount).then(() => {
            message.channel.send(`${amountText} berichten verwijderd`);
        });

    } else {
        return message.channel.send("Vul een getal achter `!clear` in");
    }

}

module.exports.help = { 
    name: "clear"
}