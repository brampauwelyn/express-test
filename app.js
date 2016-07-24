
//REQUIRE EXPRESS
var express = require('express');

//DEFINE APP
var app = express();

app.get('/', function (req, res) {
    res.send("<h1> Hello Bram </h1>");
});

app.get('/blog', function(req,res){
   res.send("<h1>Hello Alex, this is the blog </h1>")  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});