const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = '!'



 client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'test')) {
        message.channel.sendMessage('Я тестовый бот ИнФТорда!');
     }
 });
 client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'version')) {
        message.channel.sendMessage('Версия этого бота 0.05');
     }
 });
 client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'creator')) {
        message.channel.sendMessage('Мой создатель: InFTord#5186');
     }
 });
 client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'help')) {
         message.channel.sendMessage('!version - показывает версию бота');

    }
 });     
 client.on('message', message => {
   if(message.author === client.user) return;
   if(message.content.startsWith(prefix + 'news')) {
       message.channel.sendMessage('Планируется добавить экономику, музыку, новости и так далее. Так же Торд хочет доработать команду помощь, что бы все сразу выводилось одним сообщением');
    }
});
client.on('message', message => {
   if (message.content === '_хелп' || message.content === '_help' ) {
       const embed = new Discord.RichEmbed()
     .addTitle("тайтл это та большая белая хрень")
     .setColor("цвет это тот цвет которая с боку линия)"
     .addfield("**тут уже пишиешь сами команду. кстати на аддфиелд есть ограничение (я забыл сколько)**") )
     .setFooter("тут пишешь то что будет в самом низу", client.user.avatarURL)
     .setTimestamp(20202020) 
   message.channel.send({embed});
 }})


client.login('NjYzMDA5MjI5NDMwNTg3NDAy.XhHOHg.YAt49bMTiRq2Kzvd8Ezl6D1-yBo');