const MessageEmbed = require('discord.js');

module.exports={
    name: 'help',
    description: "this is a help command",
    execute(message,args,Discord){
        //message.channel.send("pong!");
        const pingEmbed=new Discord.MessageEmbed()
        .setColor('#cf2406')
        .setTitle("Help")
        .setDescription('Llista de les comandes que podeu usar:')
        .addFields(
            //{ name: '\u200B', value: '\u200B' },
            { name: 'Ping', value: 'Pong\r\t ', inline: true},
            { name: '\u200B', value: '\u200B', inline: true},
            { name: 'Update', value: 'Actualitzar resultats' , inline: true},
            { name: 'Race', value: "Detalls d'una cursa" , inline: true},
            { name: '\u200B', value: '\u200B', inline: true},
            { name: 'Driver', value: "Detalls d'un pilot", inline: true },
            { name: 'Author', value: "M'automenjo la polla", inline: true},
        );
        
        message.channel.send(pingEmbed);
    }

    
}