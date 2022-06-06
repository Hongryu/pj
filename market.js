var express = require('express')

var app = express()

app.listen(3116, function(){
    console.log("서버 오픈");
})

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/market.html")
})

app.get('/market', function(req, res){
    res.sendFile(__dirname + "/public/market.html")
})