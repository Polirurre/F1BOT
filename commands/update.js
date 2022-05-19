module.exports={
    name: 'update',
    description: "Ara podeu actualitzar la taula",

    
    execute(message,args){
        let role=message.guild.roles.cache.find(r=> r.name==="F1 Pilot");

        if(message.member.roles.cache.some(r=> r.name==="F1 Pilot")){

        }else{
            message.channel.send("Només els pilots de F1 poden canviar la taula de classificació!");
            //Per donar rol F1 Pilot //message.member.roles.add(role).catch(console.error);
        }
    }
}