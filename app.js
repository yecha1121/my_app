let express = require('express');

let app = express();

app.get('/',function(req,res){
  res.send('hello world yeni! test22');
});

app.listen(5000,function(){
  console.log('Server On!!!vv');
})
