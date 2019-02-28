let express = require('express');
let path = require('path');
let app = express();

app.set("view engine" , 'ejs');
app.use(express.static(path.join(__dirname + 'public')));

let date ={count:0};
app.get('/',function(req,res){
  date.count++;
  res.render('my_first_ejs',date);
});
app.get('/reset',function(req,res){
  date.count=0;
  res.render('my_first_ejs',date);
});
app.get('/set/count',function(req,res){
  if (req.query.count)  date.count = req.query.count;
  res.render('my_first_ejs',date);
});
app.get('/set/:num',function(req,res){
  date.count = req.params.num;
  res.render('my_first_ejs',date);
});


console.log(__dirname);
app.listen(8000,function(){
  console.log('Server On!!!vv');
})
