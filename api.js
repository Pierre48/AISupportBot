var restify = require('restify');
    var builder = require('botbuilder');

    //=========================================================
    // Bot Setup
    //=========================================================

    // Setup Restify Server
    var server = restify.createServer();
    server.listen(process.env.port || process.env.PORT || 3978, function () {
       console.log('%s listening to %s', server.name, server.url);
    });

    // Create chat bot
    var connector = new builder.ChatConnector({
       appId: '58a6aad4-bb4b-4518-8d72-a5abcfceb327',
        appPassword: '07iaDPErFSDDDufj6PZbvFP'
    });

    var bot = new builder.UniversalBot(connector);
    server.post('/api/messages', connector.listen());