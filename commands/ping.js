const MessageEmbed = require('discord.js');

module.exports={
    name: 'ping',
    description: "this is a ping command",
    execute(message,args,Discord){
        //message.channel.send("pong!");
        const pingEmbed=new Discord.MessageEmbed()
        .setColor('#cf2406')
        .setTitle("Ping")
        .setDescription('ping!');
        
        message.channel.send(pingEmbed);
    }

    
}


//.addField('\u200b', '\u200b')     blank field
/*.addField(
            {name: 'Ping', value: 'Ping'},
            {name: 'Pong', value: 'Pong'},
        )*/