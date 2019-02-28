var express = require('express');
var mysql = require('mysql');
var dbconfig = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);

var app = express();

app.set('port', process.env.PORT || 8000);

app.get('/',function(req,res){
  res.send('Root');
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
