var express = require('express');
var app = express();
var hbs = require('express3-handlebars');
var routes = require('./routes');

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);

app.listen(3000);
console.log('App running on port 3000');