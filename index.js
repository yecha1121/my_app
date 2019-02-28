var express = require('express');
var mysql = require('mysql');
var dbconfig = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);
var path = require('path');
var bodyParser =require('body-parser');

var app = express();
var db = mysql.connection;
db.once("open",function(){
  console.log("DB connected");
});
db.on("error",function(err){
  console.log("DB ERROR: ",err);
});

//model setting
var poastSchema = mysql.Schema({
  id : {type:Integer , required:true},
  name : {type:String, required:true},
  age: {type:Integer, required:true}
});

//view setting
app.set("view engine",'ejs');
app.use(express.static(path.join(__dirname + 'public')));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 8000);

// app.get('/',function(req,res){
//   res.send('Root');
// });

//set routes
app.get('/posts',function(req, res){
  Post.find({},function(err,posts){
    if(err)return res.json({success:false,message:err});
    res.json({success:true,data:posts});
  });
});
app.post('/posts',function(req,res){
  Post.crate(req.body.post,function(err,post){
    if(err)return res.json({success:false,message:err});
    res.json({success:true,data:posts});
  });
});

app.get('/persons',function(req,res){
  connection.query('Select * from Persons',function(err, rows){
    if(err) throw err;

    console.log('the solution is: ',rows);
    res.send(rows);
  });
});

app.listen(app.get('port'),function(){
  console.log('Express server listening on port' +app.get('port'));
});
