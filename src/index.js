const express = require("express");
const path = require("path");
const http = require("http");
const client = require("socket.io")(4000).sockets;
const mongo = require("mongodb").MongoClient;
const app= express()
const Users = require("./model/user.model");
const { Socket } = require("socket.io");
const route = require("./router/user.router");

app.use(express.json())
// mongo.connect("mongodb://127.0.0.1/mongochat",function(err,db){
//     if(err){
//         throw err;
//     }
//     console.log("MongoDB connected!!")

//     client.on("connection",function(){
//         let chat = db.collecton('chat')
    
//         sendStatus=function(s){
//             socket.emit('status',s)
//         }
        
//         chat.find()
//     })
   

    
// })

mongo.connect('mongodb+srv://arti:arti1234@cluster0.yj4az.mongodb.net/chatApp?retryWrites=true&w=majority',{useNewUrlParser:true},
    function(err){
        if(err){
            throw err
        }
        console.log('Database connected')
        
      

})
app.use("/user",route)
// client.on('connection',(socket)=>{
//     console.log(socket)
//     console.log('user connected')
//     socket.on('joinRoom',(data)=>{      // data will look like => {myID: "123123"}
//         console.log('user joined room')
//         socket.join(data.myID)          

//     })

// })
// Users.watch().on('change',(change)=>{
//     console.log('Something has changed')
//     io.to(change.fullDocument._id).emit('changes',change.fullDocument)
// })

// var app       =     require("express"a)();  
// var mysql     =     require("mysql");
// var http      =     require('http').Server(app);
// var io        =     require("socket.io")(http);

// /* Creating POOL MySQL connection.*/

// var pool    =    mysql.createPool({
//       connectionLimit   :   100,
//       host              :   'localhost',
//       user              :   'root',
//       password          :   '',
//       database          :   'chat',
//       debug             :   false
// });


// /*  This is auto initiated event when Client connects to Your Machien.  */

// io.on('connection',function(socket){  
//     console.log("A user is connected");
//     socket.on('status added',function(status){
//       add_status(status,function(res){
//         if(res){
//             io.emit('refresh feed',status);
//         } else {
//             io.emit('error');
//         }
//       });
//     });
// });

// var add_status = function (status,callback) {
//     pool.getConnection(function(err,connection){
//         if (err) {
//           callback(false);
//           return;
//         }
//     connection.query("INSERT INTO `status` (`s_text`) VALUES ('"+status+"')",function(err,rows){
//             connection.release();
//             if(!err) {
//               callback(true);
//             }
//         });
//      connection.on('error', function(err) {
//               callback(false);
//               return;
//         });
//     });
// }

app.listen(3000,function(){
    console.log("Listening on 3000");
});

