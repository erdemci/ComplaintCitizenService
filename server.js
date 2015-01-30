var express             = require('express'),
    app                 = express(),
    bodyParser          = require('body-parser');

app.use(bodyParser());

app.listen("3000",function(){
    console.log("I'm listening...")
});