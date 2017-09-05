//Loading colors module to make display more readable, made global
var colors = require('colors');

//loading express
process.stdout.write("Loading express....");
try {
    var express = require('express');
    var app = express();
    process.stdout.write(colors.green('OK\n'));
} catch (exception) {
    process.stdout.write(colors.red('NOK\n'));
    process.exit(1);
}

//loading http server
process.stdout.write("Loading https server....");
try {
    var server = require('https').createServer(app);
    process.stdout.write(colors.green('OK\n'));
} catch (exception) {
    process.stdout.write(colors.red('NOK\n'));
    process.exit(1);
}


//Using ejs as a templating engine
process.stdout.write('Loading ejs templating engine....');
try {
    var engine = require('ejs-locals');
    var path = require("path");
    app.set('views', path.join(__dirname, 'views'));
    app.engine('ejs', engine);
    app.set('view engine', 'ejs');
    process.stdout.write(colors.green('OK\n'));
} catch (exception) {
    process.stdout.write(colors.red('NOK : ' + exception.message +  '\n'));
    process.exit(1);
}

//Loading routes
process.stdout.write('Loading routes....');
try {
    var routes = require('./routes')(app);
    process.stdout.write(colors.green('OK\n'));
} catch (exception) {
    process.stdout.write(colors.red('NOK\n'));
    process.exit(1);
}

process.stdout.write(colors.yellow('Listening on port 3000...\n'));
server.listen(3000);
