const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen!`)

        bot.commands.set(fileGet.help.name, fileGet);


    })

});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`);

    bot.user.setActivity("!help", { type: "PLAYING" });

});

    var swearWords = ["kk","kkr","kaulo","kut","flikker","homo","kech","kechie","kinker","kt","homo","homotje","tering","tyfus","k*t","piemel","lul","neuk","sex","hoer","hoertje"];



bot.on("message", async message => {

    //het bericht kan niet worden gestuurd door een bot!
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot, message, arguments);


    var msg = message.content.toLowerCase();

    for(var i = 0; i < swearWords.length; i++){
        
        if(msg.includes(swearWords[i])){

            message.delete();

            return  message.reply("Het gebruiken van ongepaste woorden is niet toegestaan!").then(msg => msg.delete(3000));

        }

    }


});


bot.login(process.env.token);