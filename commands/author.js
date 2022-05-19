const MessageEmbed = require('discord.js');

module.exports={
    name: 'author',
    description: "Showcases information about author + github",
    execute(message,args,Discord){
        //message.channel.send("pong!");
        const pingEmbed=new Discord.MessageEmbed()
        .setColor('purple')
        //.setTitle("Pol Irurre Martínez")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .addField("Polirurre's github", "[link](https://github.com/Polirurre)")
        .addField("Polirurre's twitter", "[link](https://twitter.com/Polirurre)")
                
        message.channel.send(pingEmbed);
    }

    
}