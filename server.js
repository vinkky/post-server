var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

var posts = [
    {id: 1, post: "pirmassss", body: "pirmas pirmas"},
    {id: 2, post: "antras", body: "antras antras"},
    {id: 3, post: "trecias", body: "trecias trecias"},
];

var posts2 =[
    {id: 1, post: "pirmas", body: "pirmas pirmas"},
    {id: 2, post: "antras", body: "antras antras"},
    {id: 3, post: "trecias", body: "trecias trecias"},
];

app.get('/', function(req, res){
    res.send(posts);
});

app.post('/', function(req,res)
{
   var response = " ";
   for (var i=0; i<posts.length; i++){
       if (posts[i].id == 1)
       {
           posts2[i].id = 123321;
           posts2[i].body = "pakeistas postas";
       }
   }
   res.json(posts2);
});

app.post('/', function(req,res){
    var response = " ";
    for (var i=0; i<posts.length; i++){
       if(posts[i].id == req.body){
           response = post[i];
       }
    }
    res.json(response);
});
app.listen(3000);