const Discord = require('discord.js');
const client = new Discord.Client();
 

const mongoose = require("mongoose");


const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Calentando motores!');
});

mongoose.connect("mongodb+srv://Polirurre:Pol735705@f1bot.yyb3x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connectat correctament a MongoDB");
}).catch((error) => {
    console.log(error);
})
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    switch(command){
        case 'ping':
            client.commands.get('ping').execute(message, args, Discord);
            break;
        case 'update':
            client.commands.get('update').execute(message, args, Discord);
            break;
        case 'author':
            client.commands.get('author').execute(message, args, Discord);
            break;
        case 'help':
            client.commands.get('help').execute(message, args, Discord);
            break;
    } 
})
 













//Això hauria de ser secret i trobar-se en un .env, NO ÉS SEGUR!
client.login('OTM4MTc2MjU5MTczNzkzODIz.Yfmeug.D31B56BHIFKK-3NGMAMJiauIIjw');