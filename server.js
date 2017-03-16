var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var path = require('path');

var session = require('express-session');

var port = 8000;

app.use(session({
    secret: "somethingsecret",
    resave: true,
    saveUnintialized: false,
    cookie: {secure: false}
}));
app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json({ extended: true }))
//later we will use app.use(bp.json) with Angular

require('./server/config/mongoose.js');
//Mongoose line must be above the routes file, must load Mongoose before you load routes

require('./server/config/routes.js')(app);

app.listen(port, function(){
    console.log("It's mother fuckin working!");
});


