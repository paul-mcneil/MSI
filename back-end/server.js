var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var message = require('./controllers/message');
var item = require('./controllers/item');
var auth = require('./controllers/auth');
var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors')

// tell express to use body-parser as middleware
app.use(bodyParser.json());

// custom middleware
app.use(cors)

// requests
app.get('/api/message', message.get )
// tell node that this should be an endpoint that receives the POST
app.post('/api/message', checkAuthenticated, message.post)

app.post('/auth/register', auth.register)

// db connection
mongoose.connect("mongodb://localhost:27017/test", function(err,db){
    if(!err){
        //var db = client.db('test');
        console.log("we are connected to mongo");
        
        //db.collection('messages').insertOne({'msg':'test'});
    }
})
var server = app.listen(5000, function(){
    console.log('listening on port:', server.address().port);
})