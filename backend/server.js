const express = require('express')
const app = express()
//const postRouter = require('./routes/postsRoute');
 var cors = require('cors')

 app.use(cors())
 //var morgan = require('morgan');

 //app.use(morgan('dev'));
// app.get('/', function(req, res){
//     res.send("Hello from backend")
// })

const posts = require('./posts.json')
//app.use("/posts",postRouter);
app.use(express.json());

app.get("/",(req,res)=>{
    res.send(posts)
})

const fs=require('fs')
app.post('/',(req,res)=>{
    fs.readFile('posts.json','utf8',(err,data)=>{
        let arr =JSON.parse(data)
        console.log(arr)
        arr.push(
            {
                id:posts.length+1,
                title:req.body.title,
                body:req.body.body,
                date:req.body.date
            });
        fs.writeFile('posts.json',JSON.stringify(arr),(errr)=>{
           res.json(arr);
         //  res.send(posts)
        }
        )
    })
})
//const PORT = process.env.PORT || 3001;
app.listen(8080);

// package.json
// {
//   "name": "backend",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "nodemon server.js"
//   },
//   "author": "",
//   "license": "ISC",
//   "devDependencies": {
//     "nodemon": "^2.0.14"
//   },
//   "dependencies": {
//     "cors": "^2.8.5",
//     "express": "^4.17.1"
//   }
// }