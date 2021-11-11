const express = require('express')
const cors = require("cors");
const app = express()
const users = require('./Users')
const homwork = require('./homwork')
const fs = require('fs')
const blogs= require('./routes/blogs')
const homeWork= require('./routes/homeWork')

app.use(express.json())
app.use(cors({origin: 'http://localhost:3001'}))

app.use('/blogs',blogs)
app.use('/homeWork',homeWork)



// app.delete('/', function (req, res) {
// const user = users.filter((user)=>{ 
//     return user.id === req.body.id
// })
// const index = users.indexOf(user[0])
// users.splice(index, 1)

// fs.writeFile('users.json', `${JSON.stringify(users)}`, (err) => {
//     if (err) throw err;
//     res.send('done')
//   })
// })

// app.put('/', function (req, res) {
//     const user = users.filter((user)=>{ 
//         return user.id === req.body.id
//     })
//     user[0].user = req.body.user
    
//     fs.writeFile('users.json', `${JSON.stringify(users)}`, (err) => {
//         if (err) throw err;
//         res.send('done')
//       })
//     })

app.listen(3001, function () {
console.log('Example app listening on port 3001!')
})