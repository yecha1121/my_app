var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var dbconfig = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);
var bodyParser =require('body-parser');
var db = mysql.connection;

app.post('test',function(req,res){
  var id = req.body.id,
  name = req.body.name,
  age = req.body.age;

  console.log(id);
  console.log(name);
  console.log(age);
})

//view setting
app.set("view engine",'ejs');

//set middlewares
app.use(express.static(path.join(__dirname + 'public')));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 8000);

//set routes
app.get('/persons',function(req,res){
  connection.query('Select * from Persons',function(err, rows){
    if(err) throw err;

    console.log('the solution is: ',rows);
    res.send(rows);
  });
});

//post방식으로 전달되는 파라미터 처리를 위해 필요
app.use(bodyParser.urlencoded({extended: true}));

app.post('/insert',function(req,res){
  let body = req.body;

  var sql ='Insert into Persons(id, name, age) values(?,?,?)';
  var params = [body.id, body.name, body.age];
  conn.query(sql,params, function(err,rows){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
      }
      console.log('The file has saved');
      res.redirect('/')
  });
});

app.listen(app.get('port'),function(){
  console.log('Express server listening on port' +app.get('port'));
});
