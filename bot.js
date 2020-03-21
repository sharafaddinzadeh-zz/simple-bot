// Join our channel at Discord: https://discord.gg/wWarT8G
// Website: https://javadsharafodinzadeh.ir/discord-lifebuoy
// Owner: Javad Sharafodin Zadeh (https://javadsharafodinzadeh.ir)
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `/`
    if (message.substring(0, 1) == '/') { // You can change this
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) { // You can make more
            // /example 1
            case 'example 1':
                bot.sendMessage({
                    to: channelID,
                    message: '>>> example 1'
                });
            break;
            // /example 2
            case 'example 2':
                bot.sendMessage({
                    to: channelID,
                    message: '>>> example 2'
                });
            break;
            // /example 3
            case 'example 3':
                bot.sendMessage({
                    to: channelID,
                    message: '>>> example 3'
                });
         }
     }
});
