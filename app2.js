//  let path = require('path');
//
// const Express = require("express");
// const Bodyparser = require("body-parser");
// const MongoClient = require("mongodb").MongoClient;
// const ObjectId - require("mongodb").ObjectID;
//
// var app = Express();
//
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
//
// app.set("view engine" , 'ejs');
// app.use(express.static(path.join(__dirname + 'public')));
//
// //set routes
// app.get('/posts',function(req, res){
//   Post.find({},function(err,posts){
//     if(err)return res.json({success:false,message:err});
//     res.json({success:true,data:posts});
//   });
// });
// app.post('/posts',function(req,res){
//   Post.crate(req.body.post,function(err,post){
//     if(err)return res.json({success:false,message:err});
//     res.json({success:true,data:posts});
//   });
// });
//
//
// console.log(__dirname);
// app.listen(8000,function(){
//   console.log('Server On!!!vv');
// });
