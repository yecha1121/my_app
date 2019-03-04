// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host : 'localhost',
//   user : 'root',
//   password: '1111',
//   port: 3306,
//   database : 'my_db'
// });
//
// connection.connect();
//
// connection.query('select * from Persons',function(err,rows,fields){
//   if(!err)
//   console.log('The solution is: ',rows);
//   else
//     console.log('Error while performing Query',err);
//
// });
//
// connection.end();


//set routes
// app.get('/posts',function(req, res){
//   Post.find({},function(err,posts){
//     if(err)return res.json({success:false,message:err});
//     res.json({success:true,data:posts});
//   });
// });
//
// app.post('/posts',function(req,res){
//   Post.crate(req.body.post,function(err,post){
//     if(err)return res.json({success:false,message:err});
//     res.json({success:true,data:posts});
//   });
// });
