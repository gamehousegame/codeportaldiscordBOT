const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;



    var ticketChannel = message.guild.channels.cache.find(c => c.name == userName.toLowerCase() + "#" + userDiscriminator); 

                   
               message.guild.channels.create(userName + "#" + userDiscriminator, {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        deny: ['VIEW_CHANNEL'],
                    },
                    {
                        id: message.author,
                        allow: ['VIEW_CHANNEL']
                    },
                ],
            });



                    

                    var embedParrent = 'uw ticket is aangemaakt!';
            
                    message.reply(embedParrent);
                    

        }

module.exports.help = { 
    name: "ticket"
}