const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let postList = require('./postList')

app.post('/addPost', (req, res) => {
    postList.push({title: req.body.title, img: req.body.img, text: req.body.content, date: req.body.date})
    res.redirect('localhost:3000/')
    
})
app.get('/getPosts', (req, res) => {
    res.send(postList)
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})