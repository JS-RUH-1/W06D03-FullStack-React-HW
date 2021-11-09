const express = require('express')
const app = express()
const blogs = require('./blog.json')

const cors = require('cors')
app.use(cors({origin: 'http://localhost:3000'}))

app.use(express.json())

app.get('/blogs', (req,res) =>{
    res.send(blogs)
})


app.post('/blogs', (req, res) =>{
    console.log(req.body)
    let bolg ={
        id: blogs.length +1, 
        title: req.body.title,
        body: req.body.body,
        date: req.body.date
    }
    blogs.push(bolg)
    res.send(bolg)
})


app.listen(8080)