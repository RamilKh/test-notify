(function(){
    //import
    //var TelegramBot = require('node-telegram-bot-api');
    //var fs = require('fs');
    //import { isSuccess, getMessage, sendMessage } from 'app/utils';
    import { Config } from 'app/config';

    console.log(Config);

    //int params
    // var token = '516299893:AAF2EZjrS7h0ee_kb4Hy2YePGoM3metBo30';
    // var bot = new TelegramBot(token, {
    //     polling: true
    // });
    // const groupId = '-284765633';
    
    //start read result file of test -> send message
    // fs.readFile('karma-result.json', 'utf8', function (err, data) {
    //     if(err) throw err;
    
    //     oData = JSON.parse(data);
    
    //     isSuccess(oData) ? process.exit(1) : sendMessage(oData);
    
    // });

})();