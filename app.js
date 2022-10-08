const discord = require('discord.js');
const intents = new discord.Intents(32767);
const client = new discord.Client(( { intents }));
const Voice = require('@discordjs/voice')
const config = require('./jsconfig.json')
const { joinVoiceChannel } = require('@discordjs/voice');
const FFmepg = require('ffmpeg')

const { generateDependencyReport } = require('@discordjs/voice');

console.log(generateDependencyReport());




function presence(){
    client.user.setPresence({
        activities: [{name: 'a hacer la V2.0', type: 'PLAYING'}],
        status: 'dnd'  // 'dnd' 'online' 'invisible' 'idle'
          
    });
    
}


client.on('ready', () =>{
    console.log(`${client.user.username} ejecutandose en la version beta v1.5 ... V1, Rotate!`)
    presence();
    
})



client.on('messageCreate', async (message) => {

    //Comando 'af/'
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return

    let prefix = "af/"  // Modifica el prefix del bot

     if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase()


    if(command === "update"){
        const UpdateEmbed = new discord.MessageEmbed()
        .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL()})
        .setColor('#e30')
        .setDescription('**LA ACTUALIZACION 2.0 HA LLEGADO!**')
        .setFields(
            {name: "Nuevos audios!", value: `para ser mas especificos llevamos ahora **${config.audios}**` },
            {name: "Poder unirse a cualquier canal!",value: "Cansado de que solo se pudiera reproducir en solo un VC? _AHORA SE PUEDEN EN TODOS!_"},
        )
        .setThumbnail(`${client.user.avatarURL()}`)

        message.channel.send({embeds: [UpdateEmbed], content: null})
    }

})

// Comandos Embed

client.on('messageCreate', async (message) =>{

    let prefix = "af/"

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase()
    
    //voz 1

    if(command === '1'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/A_usted_que_le_importa.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    //VOZ 2 

    if(command === '2'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Abra_una_bolsita_de_hielo.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }



    if(command === '3'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Agrarrense_porque_se_viene_desorden.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '4'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Avise_si_le_gusto.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === 'bucaros'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/BUCAROS_BUCAROS.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }


    if(command === '5'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Buenos_dias_amigito.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }


    if(command === '6'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Cual_es_la_groceria.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '7'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Cual_es_su_risa.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '8'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Hay_no.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '9'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Hijole_no_se_va_a_poder.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '10'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Hola_micky.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '11'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/mamerto_ouuh.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '12'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Martin_care_verga.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '13'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Mas_mentiroso.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '14'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Pero_de_que_habla_usted.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '15'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Pero_que_monda.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }
    if(command === '16'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Porque_tan_perdida.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '17'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Prepare_esas_tapas.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === 'elniño'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Que_le_hicieron_al_niño.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '18'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Que_putas_es_eso.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === 'siuu'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Siuuuu.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '19'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Todos_peresolos.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '20'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Vaya_y_coma_mierda.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '21'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Y_cual_es_la_hpta_monta.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === '22'){
        const PlayinEmbed = new discord.MessageEmbed()       
            .setColor('#4080ee')
            .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
            .setDescription('Iniciando a reproducir un audio')
            .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 
        
        
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Yo_que_no_creo.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);


    }

    if(command === "23"){
        const PlayinEmbed = new discord.MessageEmbed()       
        .setColor('#4080ee')
        .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
        .setDescription('Iniciando a reproducir un audio')
        .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/No_venga_con_sus.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);

    }
    if(command === "24"){
        const PlayinEmbed = new discord.MessageEmbed()       
        .setColor('#4080ee')
        .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
        .setDescription('Iniciando a reproducir un audio')
        .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Compañero.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);

    }

    if(command === "25"){
        const PlayinEmbed = new discord.MessageEmbed()       
        .setColor('#4080ee')
        .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
        .setDescription('Iniciando a reproducir un audio')
        .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Marlon_loca.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);

    }
    if(command === "26"){
        const PlayinEmbed = new discord.MessageEmbed()       
        .setColor('#4080ee')
        .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
        .setDescription('Iniciando a reproducir un audio')
        .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/astrofo.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);

    }
    if(command === "27"){
        const PlayinEmbed = new discord.MessageEmbed()       
        .setColor('#4080ee')
        .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
        .setDescription('Iniciando a reproducir un audio')
        .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Mamerto_es_estupido.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);

    }
    if(command === "28"){
        const PlayinEmbed = new discord.MessageEmbed()       
        .setColor('#4080ee')
        .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
        .setDescription('Iniciando a reproducir un audio')
        .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/EL_niño_de_medallo.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);

    }

    if(command === "29"){
        const PlayinEmbed = new discord.MessageEmbed()       
        .setColor('#4080ee')
        .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
        .setDescription('Iniciando a reproducir un audio')
        .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/nonono.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);

    }
    if(command === "30"){
        const PlayinEmbed = new discord.MessageEmbed()       
        .setColor('#4080ee')
        .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
        .setDescription('Iniciando a reproducir un audio')
        .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Esooo.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);

    }
    if(command === "31"){
        const PlayinEmbed = new discord.MessageEmbed()       
        .setColor('#4080ee')
        .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
        .setDescription('Iniciando a reproducir un audio')
        .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Miguelo_discord.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);

    }

    if(command === "32"){
        const PlayinEmbed = new discord.MessageEmbed()       
        .setColor('#4080ee')
        .setAuthor({ iconURL: client.user.avatarURL(), name: client.user.username})
        .setDescription('Iniciando a reproducir un audio')
        .setURL('https://www.aerofarallones.com')
        message.channel.send({ content: null, embeds: [PlayinEmbed]}) 

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const path = require("path")
        const { createAudioPlayer, createAudioResource } = require('@discordjs/voice');

        const resource = createAudioResource(require("path").join(__dirname, 'assets/AUDIO/Jajaja_sarcasmo.ogg'))
        const player = createAudioPlayer()
        connection.subscribe(player);
        player.play(resource);

    }



    /*

    JOIN, LEAVE, STOP Y COMMANDS 

    */

    if(command === "join"){      
       const JoinEmbed = new discord.MessageEmbed()
        .setColor('#4080ee')
        .setDescription('Uniendose a canal de voz!')
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL()});
        

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });
        const { VoiceConnectionStatus } = require('@discordjs/voice');

        connection.on(VoiceConnectionStatus.Ready, () => {
            console.log('Voz en altitud crucero - listo a catering!');
        });

        message.channel.send({ embeds: [JoinEmbed] });   
    }



    if(command === "leave"){
        const LeaveEmbed = new discord.MessageEmbed()
        .setColor('#4080ee')
        .setDescription('Saliendo del canal de voz!... *Bye*')
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL()});

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        connection.destroy()
        message.channel.send({ embeds: [LeaveEmbed] }); 
    }

    if(command === "stop"){
        const StopEmbed = new discord.MessageEmbed()
        .setColor('#4080ee')
        .setDescription('Parando todos los audios!')
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL()})

        message.channel.send({ embeds: [StopEmbed] });     
    }




    if(command === 'commands'){

        //Embed Helper ( 1 )

        const HelpEmbed = new discord.MessageEmbed()
        .setColor('#4080ee')
        .setTitle('Comandos')
        .setDescription('Necesitas ayuda? \n lo comandos son los siguientes')
        .setFields(
            {name: 'Comandos basicos', value: 'Comandos basicos "Basicos"', inline: true},
            {name: 'Comandos de audios', value: 'Para ver que audios utilizar "Audios"', inline: true},
            {name: 'Extra', value: 'Algun comando adicional que haya', inline: true}
        )
        .setThumbnail(`${client.user.avatarURL()}`)
        .setAuthor({ name: client.user.username, iconURL: message.author.avatarURL()})
        .setURL('https://www.aerofarallones.com')
        



        //Botón de reaccion 
        const ButtonsReact = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                .setCustomId('Basicos')
                .setLabel('Basicos')
                .setStyle('PRIMARY')
            )
            .addComponents(
                new discord.MessageButton()
                .setCustomId('Audios')
                .setLabel('Audios')
                .setStyle('DANGER')
            )
            .addComponents(
                new discord.MessageButton()
                .setCustomId('Extra')
                .setLabel('Extra')
                .setStyle('SUCCESS')

            )

        message.channel.send({ embeds: [HelpEmbed], components: [ButtonsReact]})

            

            
    }

    if(command === 'prueba'){
        const row = new discord.MessageActionRow()
        .addComponents(
            new discord.MessageButton()
            .setCustomId('primary')
            .setLabel('NO ABRIR!')
            .setStyle('PRIMARY')
        );
        const Prueba = new discord.MessageEmbed()
        .setColor('#4080ee')
        .setDescription('Prueba 1\n*Bye*')
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL()})
        message.channel.send({ content: null, ephemeral: true, embeds: [Prueba], components: [row] });
    }


});

const ButtonsReact2 = new discord.MessageActionRow()

.addComponents(
   new discord.MessageButton()
   .setCustomId('Prueba2')
   .setLabel('to pag 2')
   .setStyle('SECONDARY') 
)











            //////////////////////////////////                  
            //                              //
            //          HELP COMMANDS       //
            //            BUTTONS           //
            //           AND EMBEDS         //
            //                              //            
            //////////////////////////////////  








    //Embed Helper ( 2 ) [Basicos]
    
    const HelpEmbedBasicos = new discord.MessageEmbed()
        .setColor('#4080ee')
        .setTitle('Comandos basicos')
        .setDescription('Ahora vas a ver como')
        .setFields(
            {name: 'Unirse', value: 'af/join', inline: true},
            {name: 'Salir', value: 'af/leave', inline: true},
            {name: 'Parar', value: 'af/stop', inline: true}
            )
    .setThumbnail(`https://cdn.discordapp.com/avatars/948807795795447868/096cc651df18ff4f4336fddcf7f3da12.webp`)
    .setFooter({text: 'Para volver dale a "Eliminar este mensaje"'})





    //Embed Helper ( 3 ) [Audios]
    
    const HelpEmbedAudios = new discord.MessageEmbed()
    .setColor('#4080ee')
    .setTitle('Audios')
    .setFields(
    {name: 'A usted que le importa', value: 'af/1'},
    {name: 'Abra una bolsita de hielo', value: 'af/2'},
    {name: 'Agarrense porque se viene desorden', value: 'af/3'},
    {name: 'Si le gusto, avise', value: 'af/4'},
    {name: 'BUCAROS!', value: 'af/bucaros'},
    )
    .setThumbnail(`https://cdn.discordapp.com/avatars/948807795795447868/096cc651df18ff4f4336fddcf7f3da12.webp`)

    const HelpEmbedAudios2 = new discord.MessageEmbed()
    .setColor('#4080ee')
    .setTitle('Audios Pagina 2')
    .setFields(
    {name: 'Buenos dias amigitos', value: 'af/5'},
    {name: 'Cual es la groceria', value: 'af/6'},
    {name: 'Cual es su risa', value: 'af/7'},
    {name: 'Hay noo', value: 'af/8'},
    {name: 'Hijole', value: 'af/9'},
    )
    .setThumbnail(`https://cdn.discordapp.com/avatars/948807795795447868/096cc651df18ff4f4336fddcf7f3da12.webp`)

    const HelpEmbedAudios3 = new discord.MessageEmbed()
    .setColor('#4080ee')
    .setTitle('Audios Pagina 3')
    .setFields(
    {name: 'Hola (micky mouse)', value: 'af/10'},
    {name: 'Mamerto ouuuh', value: 'af/11'},
    {name: 'Martin care verga', value: 'af/12'},
    {name: 'Mas mentiroso', value: 'af/13'},
    {name: 'Pero de que habla usted', value: 'af/14'},
    )
    .setThumbnail(`https://cdn.discordapp.com/avatars/948807795795447868/096cc651df18ff4f4336fddcf7f3da12.webp`)


    const HelpEmbedAudios4 = new discord.MessageEmbed()
    .setColor('#4080ee')
    .setTitle('Audios Pagina 4')
    .setFields(
    {name: 'Pero que monda', value: 'af/15'},
    {name: 'Porque tan perdida', value: 'af/16'},
    {name: 'Prepare esas tapas', value: 'af/17'},
    {name: 'Que le hicieron al niño!', value: 'af/elniño'},
    {name: 'Que putas es esa mamada', value: 'af/18'},
    )
    .setThumbnail(`https://cdn.discordapp.com/avatars/948807795795447868/096cc651df18ff4f4336fddcf7f3da12.webp`)

    const HelpEmbedAudios5 = new discord.MessageEmbed()
    .setColor('#4080ee')
    .setTitle('Audios Pagina 5')
    .setFields(
    {name: 'Siuuuu', value: 'af/siuu'},
    {name: 'Todos peresolos', value: 'af/19'},
    {name: 'Vaya y coma mierda', value: 'af/20'},
    {name: 'Y cual es la hpta montadera', value: 'af/21'},
    {name: 'Yo no creo', value: 'af/22'},
    )
    .setThumbnail(`https://cdn.discordapp.com/avatars/948807795795447868/096cc651df18ff4f4336fddcf7f3da12.webp`)

    const HelpEmbedAudios6 = new discord.MessageEmbed()
    .setColor('#4080ee')
    .setTitle('Audios Pagina 6')
    .setFields(
        {name: 'No venga con sus', value: 'af/23'},
        {name: 'Compañero', value: 'af/24'},
        {name: 'Marlon loca', value: 'af/25'},
        {name: 'Astrofo', value: 'af/26'},
        {name: 'Mamerto es estupido', value: 'af/27'},
        )
    .setThumbnail(`https://cdn.discordapp.com/avatars/948807795795447868/096cc651df18ff4f4336fddcf7f3da12.webp`)

    const HelpEmbedAudios7 = new discord.MessageEmbed()
    .setColor('#4080ee')
    .setTitle('Audios Pagina 7')
    .setFields(
        {name: 'El niño de medallo', value: 'af/28'},
        {name: 'nonono', value: 'af/29'},
        {name: 'Esooo', value: 'af/30'},
        {name: 'Jajaja (sarcasmo)', value: 'af/31'},
        )
    .setThumbnail(`https://cdn.discordapp.com/avatars/948807795795447868/096cc651df18ff4f4336fddcf7f3da12.webp`)




    const ButtonsReactAudios = new discord.MessageActionRow()

        .addComponents(

            new discord.MessageButton()
            .setCustomId('Pagina2_Audios')
            .setLabel('->')
            .setStyle('SUCCESS'),
        )


        const ButtonsReactAudios2Pag = new discord.MessageActionRow()
        .addComponents(

            new discord.MessageButton()
            .setCustomId('Pagina3_AudiosReturn')
            .setLabel('<-')
            .setStyle('PRIMARY'),
        )  


        .addComponents(

            new discord.MessageButton()
            .setCustomId('Pagina3_Audios')
            .setLabel('->')
            .setStyle('SUCCESS'),
        ) 


        const ButtonsReactAudios3Pag = new discord.MessageActionRow()
        .addComponents(

            new discord.MessageButton()
            .setCustomId('Pagina4_AudiosReturn')
            .setLabel('<-')
            .setStyle('PRIMARY'),
        )  


        .addComponents(

            new discord.MessageButton()
            .setCustomId('Pagina4_Audios')
            .setLabel('->')
            .setStyle('SUCCESS'),
        ) 



        const ButtonsReactAudios4Pag = new discord.MessageActionRow()
        .addComponents(

            new discord.MessageButton()
            .setCustomId('Pagina5_AudiosReturn')
            .setLabel('<-')
            .setStyle('PRIMARY'),
        )  


        .addComponents(

            new discord.MessageButton()
            .setCustomId('Pagina5_Audios')
            .setLabel('->')
            .setStyle('SUCCESS'),
        ) 
        
        const ButtonsReactAudios5Pag = new discord.MessageActionRow()
        .addComponents(

            new discord.MessageButton()
            .setCustomId('Pagina6_AudiosReturn')
            .setLabel('<-')
            .setStyle('PRIMARY'),
        )  
        
        .addComponents(

            new discord.MessageButton()
            .setCustomId('Pagina6_Audios')
            .setLabel('->')
            .setStyle('SUCCESS'),
        ) 

        const ButtonsReactAudios6Pag = new discord.MessageActionRow()
        .addComponents(
            new discord.MessageButton()
            .setCustomId('Pagina7_AudiosReturn')
            .setLabel('<-')
            .setStyle('PRIMARY')
        )
        .addComponents(
            new discord.MessageButton()
            .setCustomId('Pagina7_Audios')
            .setLabel('->')
            .setStyle('SUCCESS'),
        )

        const ButtonsReactAudios7Pag = new discord.MessageActionRow()
        .addComponents(
            new discord.MessageButton()
            .setCustomId('Pagina8_AudiosReturn')
            .setLabel('<-')
            .setStyle('PRIMARY')
        )

        


client.on('interactionCreate', interaction =>{
    if(!interaction.isButton()) return;
    console.log(`${interaction.user.username} inicio una interaccion a ${interaction.customId}`)


   //Basicos  
    if(interaction.customId === 'Basicos' ){
        interaction.reply({ content: null, ephemeral: true, embeds: [HelpEmbedBasicos]})

    }

    //Audios

        // Next Page

        if(interaction.customId === 'Audios'){
            interaction.reply({ content: null, ephemeral: true, embeds: [HelpEmbedAudios], components: [ButtonsReactAudios]});
        }

        if(interaction.customId === 'Pagina2_Audios'){
             interaction.reply({ content: null, ephemeral: true, embeds: [HelpEmbedAudios2], components: [ButtonsReactAudios2Pag]}) 
            }

       if(interaction.customId === 'Pagina3_Audios'){
          interaction.reply({ content: null, ephemeral: true, embeds: [HelpEmbedAudios3], components: [ButtonsReactAudios3Pag]}) 
        }

        if(interaction.customId === 'Pagina4_Audios'){
            interaction.reply({ content: null, ephemeral: true, embeds: [HelpEmbedAudios4], components: [ButtonsReactAudios4Pag] })
        }   
        if(interaction.customId === 'Pagina5_Audios'){
            interaction.reply({content: null, ephemeral: true, embeds: [HelpEmbedAudios5], components: [ButtonsReactAudios5Pag] })
        }
 
        if(interaction.customId === 'Pagina6_Audios'){
            interaction.reply({ content: null, ephemeral: true, embeds: [HelpEmbedAudios6], components: [ButtonsReactAudios6Pag] })
        }
        if(interaction.customId === 'Pagina7_Audios'){
            interaction.reply({ content: null, ephemeral: true, embeds: [HelpEmbedAudios7],components: [ButtonsReactAudios7Pag] })
        }
       // RETURNING


        if(interaction.customId === 'Pagina3_AudiosReturn'){
        interaction.reply({ content: null, ephemeral: true, embeds: [HelpEmbedAudios], components: [ButtonsReactAudios]}) 
        }  

        if(interaction.customId === 'Pagina4_AudiosReturn'){
            interaction.reply({ content: null, ephemeral: true, embeds: [HelpEmbedAudios2], components: [ButtonsReactAudios2Pag]})
        }
        
        if(interaction.customId === 'Pagina5_AudiosReturn'){
            interaction.reply({content: null, ephemeral: true, embeds: [HelpEmbedAudios3], components: [ButtonsReactAudios3Pag]})
        }
        if(interaction.customId === 'Pagina6_AudiosReturn'){
            interaction.reply({content: null, ephemeral: true, embeds: [HelpEmbedAudios4], components: [ButtonsReactAudios4Pag]})
        }
        if(interaction.customId === 'Pagina7_AudiosReturn'){
            interaction.reply({ content: null, ephemeral: true, embeds: [HelpEmbedAudios5], components: [ButtonsReactAudios5Pag]})
        }
        if(interaction.customId === 'Pagina8_AudiosReturn'){
            interaction.reply({ content: null, ephemeral: true, embeds: [HelpEmbedAudios6], components: [ButtonsReactAudios6Pag]})
        }
});
    

client.login(config.token)




//Notas

console.log(config.pendientes)

//    ____________

//    |             \
//    |     ___      \
//    |    |   |      |
//    |    |___|      |
//    |              /
//    |             /

//    |       ----
//    |   |  \
//    |   |   \
//    |___|____\
