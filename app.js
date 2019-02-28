let express = require('express');
let path = require('path');
let app = express();

// app.get('/',function(req,res){
//   res.send('hello world yeni! test22');
// });

app.use(express.static(path.join(__dirname + '/public')));
console.log(__dirname);
app.listen(8000,function(){
  console.log('Server On!!!vv');
})
