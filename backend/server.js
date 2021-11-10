const express = require('express')
const app = express()
const blogs = require('./blog.json')

const cors =require('cors')
app.use(cors({origin: 'http://localhost:3000'}))

app.use(express.json());

app.get('/getPosts', function(req , res){
    res.send(blogs)
    console.log(blogs)
})
app.post('/post', function (req, res) {
    const newblog={
        id : blogs.length+1,
        title:req.body.title,
        body :req.body.body,
        date: new Date()

    }
    blogs.push(newblog);
    res.send(blogs)
})

app.listen(3001,function(){
    console.log('Example app listening on port 3001!')
})