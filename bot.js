const Discord = require('discord.js');
const client = new Discord.Client()
const ytdl = require('ytdl-core');
const config = require('./config.json');

var prefix = '_'
client.on("ready", () => {
    console.log(`Created by InFTord`); 
    client.user.setActivity(`На ${client.guilds.size} Серверов (_help)`, { type: 'WATCHING' });
  });

 
 client.on('message', message => {
    if (message.content === 'version' ) {
        const embed = new Discord.RichEmbed()
        .setTitle("Шо за версия Шиндуса у этого бота?","")
        .setColor(0xff0000 )
        .addField("Версия 0.3.0","Неожиданно я поменял одну строку в боте, что скажешь Илон Маск?")
        .setFooter("©️ InFTord Все права сьедены создателем.", client.user.avatarURL)
        .setTimestamp()
    message.channel.send({embed});
}})

 client.on('message', message => {
    if (message.content === 'creator' ) {
        const embed = new Discord.RichEmbed()
        .setTitle("Кто создал этого ботика?")
        .setColor(0xff0000)
        .addField("**Создатель бота: InFTord#5186, но ему так же помогал такой человек как S0m0g0nUWU#3074**","Факт про создателя: он уже как два дня занят разработкой бота, и даже забил на свою любимую игру Slime Rancher")
        .setFooter("©️ InFTord Все права сьедены создателем.", client.user.avatarURL)
        .setTimestamp()
    message.channel.send({embed});
}})


client.on('message', message => {
    if (message.content === 'help' ) {
        const embed = new Discord.RichEmbed()
        .setTitle("Команды этого бота")
        .setColor(0xff0000)
        .addField("***creator***", "Показывает, какой дебик создал этого бота")
        .addField("***version***", "Показывает версию бота")
        .addField("***help***", "Вы и так смотрите хелп, вы совсем?")
        .addField("***news***", "Показывает новости по поводу бота, создателя бота и т.д")
        .addField("***Кикать и банить***", "Вы можете кикать сами знаете какими командами и каким префиксом")
        .addField("***friends***", "Здесь можно посмотреть, кто дружит с создателем этого бота")
        .addField("***invite***", "С помощью этой ссылки можно пригласить к себе на сервер бота (она еще разрабатывается, но бота уже можно пригласить)")
        .setFooter("©️ InFTord Все права сьедены создателем.", client.user.avatarURL)
        .setTimestamp()
    message.channel.send({embed});
}})

client.on('message', message => {
    if (message.content === 'news'  ) {
        const embed = new Discord.RichEmbed()
        .setTitle("Новости по поводу бота и других вещей")
        .setColor(0xff0000)
        .addField("Музыка (Находится в разработке)", "Да-да, вы сможете слушать Фейса в Дискорде!")
        .addField("Возможность кикать и банить (Временно невозможно) ", "С моим ботом вы сможете банить и кикать людей! МУХАХАХАХАХАХАХА")
        .addField("Друзья (Выполнено) ", "В боте будут показываться друзья создателя бота, или его партнеры")
        .addField("Крупный апдейт", "В бота будет добавлено кое что большое, причем это действительно будет БОЛЬШОЕ обновление")
        .setFooter("©️ InFTord Все права сьедены создателем.", client.user.avatarURL)
        .setTimestamp()
    message.channel.send({embed});
}})

client.on('message', message => {
    if (message.content === 'invite' ) {
        message.channel.send({embed: {
            color: 0xff0000,
            description: "** Жми на вот эту кнопку [кнопка.exe](https://discordapp.com/oauth2/authorize?clientid=662937222563102730&scope=bot&permissions=1476779126) что-бы пригласить этого кота-бота к себе на сервер **", 
            timestamp: new Date(),
    footer: {
      iconurl: client.user.avatarURL,
      text: "© InFTord Все права сьедены создателем."
              }
          }});
    }
})

client.on('message', message => {
    if (message.content === 'friends' ) {
        const embed = new Discord.RichEmbed()
.setTitle("Друзья создателя бота")
.setColor(0xff0000)
.addField("**Друзья создателя бота: Мурзик, Фувиль, Самогон, Ландер (Хоть он и нуб в программировании), Радиш, Ларвест, Влад и многие другие с АйсЧата.**","Факт про создателя: его друзья называют его тортом.")
.setFooter("©️ InFTord Все права сьедены создателем.", client.user.avatarURL)
.setTimestamp()
message.channel.send({embed});
}})

client.on('message', message => {
    if (message.member.hasPermission("ADMINISTRATOR") )

    if (message.content.startsWith("kick")) {
        
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(member + " Был кикнут с этого сервера! ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Не могу кикнуть его!");
        });
    }
},);

client.on('message', message =>{
    if (message.member.hasPermission("ADMINISTRATOR") )

    if (message.content.startsWith("ban")) {

        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Ban
        member.ban().then((member) => {
            // Successmessage
            message.channel.send(member + " Был отправлен в бан! ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Я не могу забанить этого человека");
        });
}})

client.on("guildMemberRemove", (member) => { 
    let guild = member.guild;
    let memberTag = member.user.tag;
    if(guild.systemChannel){
        guild.systemChannel.send(member + " Ливнул с этого сервера... ");
}});


client.on("guildMemberAdd", (member) => { 
    let guild = member.guild;
    let memberTag = member.user.tag;
    if(guild.systemChannel){
        guild.systemChannel.send(member + " Присоеденился к нам! ");
}});


client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === "ping") {
      const m = await message.channel.send("Пинг?");
      m.edit(`Понг! Пинг:  ${m.createdTimestamp - message.createdTimestamp}ms. API Пинг: ${Math.round(client.ping)}ms`);
    }})

client.login('');